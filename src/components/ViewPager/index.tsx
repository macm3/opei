import * as React from 'react';
import * as PropTypes from 'prop-types';

interface P {
    index: React.Key;
    onRequestChange?: (nextIndex: React.Key) => void;
}

const styles: {
    [key: string]: React.CSSProperties;
} = {
    grid: {
        display: 'grid',
        gridTemplateRows: '[content-start] 100% [content-end]',
        gridTemplateColumns: '[content-start] 100% [content-end]',
    },
    row: {
        gridRow: 'content-start / content-end',
        gridColumn: 'content-start / content-end',
        transition: 'all 400ms ease 0ms',
    },
};

const styleForGrid = (index: number): React.CSSProperties => ({
    ...styles.grid,
    '--index': index,
});

const styleForRow = (index: number): React.CSSProperties => ({
    ...styles.row,
    transform: `translatex(calc((((var(--index) * -1) + ${index}) * (100% + 16px))`
});

class ViewPager extends React.Component<P> {
    public static propTypes = {
        children: PropTypes.node.isRequired,
    };

    constructor(props: P, context: {}) {
        super(props, context);

        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentWillMount(): void {
        window.addEventListener('keydown', this.onKeyDown);
    }

    componentWillUnmount(): void {
        window.removeEventListener('keydown', this.onKeyDown);
    }

    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<{}>, nextContext: {}): void {
        const { index } = this.props;
        if (nextProps.index !== index) {
            const children = React.Children.toArray(this.props.children);
            const child: React.ReactChild = children[this.getIndex(index)];
            if (typeof child !== 'number' && typeof child !== 'string') {
                const props = React.cloneElement(child).props;
                if (props.onWillResignActive) {
                    props.onWillResignActive();
                }
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<{}>, prevContext: {}): void {
        const { index } = this.props;
        if (prevProps.index !== index) {
            const children = React.Children.toArray(this.props.children);
            const child: React.ReactChild = children[this.getIndex(index)];
            if (typeof child !== 'number' && typeof child !== 'string') {
                const props = React.cloneElement(child).props;
                if (props.onDidBecomeActive) {
                    props.onDidBecomeActive();
                }
            }
        }
    }

    componentDidMount(): void {
        const { index } = this.props;
        const children = React.Children.toArray(this.props.children);
        const child: React.ReactChild = children[this.getIndex(index)];
        if (typeof child !== 'number' && typeof child !== 'string') {
            const props = React.cloneElement(child).props;
            if (props.onDidBecomeActive) {
                props.onDidBecomeActive();
            }
        }
    }

    render(): JSX.Element | null | false {
        const { children, index } = this.props;
        return (
            <div style={styleForGrid(this.getIndex(index))}>
                {React.Children.map(children, (child, i) => (
                    <div style={styleForRow(i)}>
                        {child}
                    </div>
                ))}
            </div>
        );
    }

    private getIndex(key: React.Key): number {
        const children = React.Children.toArray(this.props.children);
        for (let i = children.length - 1; i >= 0; --i) {
            const child = children[i];
            if (typeof child !== 'number' && typeof child !== 'string') {
                if (this.cleanKey(React.cloneElement(child).key) === key) {
                    return i;
                }
            }
        }

        throw new Error(`${key} ∉ this.props.children`);
    }

    private getKey(index: number): React.Key {
        const children = React.Children.toArray(this.props.children);
        const child = children[index];
        if (typeof child !== 'number' && typeof child !== 'string') {
            return this.cleanKey(React.cloneElement(child).key!);
        }

        throw null;
    }

    private cleanKey(key: React.Key | null): React.Key {
        return `${key}`.slice(`${key}`.indexOf('.$') + 2);
    }

    private onKeyDown(e: KeyboardEvent) {
        const { index, onRequestChange } = this.props;
        if (onRequestChange) {
            const children = React.Children.toArray(this.props.children);
            if (children.length > 1) {
                if (!e.defaultPrevented && !(e.target instanceof Element && /input|textarea/i.test(e.target.tagName))) {
                    switch (e.keyCode) {
                        case 39: {
                            const i = this.getIndex(index);
                            const nextIndex = Math.min(i + 1, children.length - 1);
                            if (nextIndex !== i) {
                                onRequestChange(this.getKey(nextIndex));
                            }
                            break;
                        }

                        case 37: {
                            const i = this.getIndex(index);
                            const nextIndex = Math.max(i - 1, 0);
                            if (nextIndex !== i) {
                                onRequestChange(this.getKey(nextIndex));
                            }
                            break;
                        }

                        default: {
                            if (e.altKey) {
                                children.every((child, nextIndex) => {
                                    if (typeof child !== 'number' && typeof child !== 'string') {
                                        const el = React.cloneElement(child);
                                        if (el.props.keyCode === e.keyCode) {
                                            onRequestChange(this.cleanKey(el.key));
                                            return false;
                                        }
                                    }
                                    return true;
                                });
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
}

export class Page extends React.Component<{
    key: React.Key;
    keyCode?: number;
    onDidBecomeActive?: () => void;
    onWillResignActive?: () => void;
}> {
    render() {
        return this.props.children;
    }
}

export default ViewPager;