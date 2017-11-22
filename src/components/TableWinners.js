import React from 'react'
import { Header, Image, Table } from 'semantic-ui-react'

const TableExampleCollapsing = () => (
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><center>Aluno</center></Table.HeaderCell>
        {/* <Table.HeaderCell>Correct Guesses</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/assets/images/avatar/small/lena.png' rounded size='mini' />{/*Minha ideia é colocar as imagens como a medalha nesse casi acho desnecessário a modalidade na tabela*/}
            <Header.Content>
                Marcus Vinícius
            </Header.Content>
          </Header>
        </Table.Cell>
        {/* <Table.Cell>
            Modalidade A
        </Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/assets/images/avatar/small/matthew.png' rounded size='mini' />
            <Header.Content>
                Matthew
            </Header.Content>
          </Header>
        </Table.Cell>
        {/* <Table.Cell>
            15
        </Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/assets/images/avatar/small/lindsay.png' rounded size='mini' />
            <Header.Content>
                Lindsay
            </Header.Content>
          </Header>
        </Table.Cell>
        {/* <Table.Cell>
            12
        </Table.Cell> */}
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Image src='/assets/images/avatar/small/mark.png' rounded size='mini' />
            <Header.Content>
                Mark
            </Header.Content>
          </Header>
        </Table.Cell>
        {/* <Table.Cell>
            11
        </Table.Cell> */}
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleCollapsing