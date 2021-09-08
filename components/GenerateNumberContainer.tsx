import { Block, Button, Text } from "expo-ui-kit";
import React, { useEffect } from "react";
import { DataTable, Modal, Portal } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  loadStateRandomNumber,
  randomRoll,
  removeState,
  usePersistRandomNumber,
} from "../redux/actions";
import { RandomNumberData, SetNewNumber } from "../redux/randomNumberSlice";
import { RootState } from "../redux/store";

export default function GenerateNumberContainer() {
  const dispatch = useDispatch();

  const [visible, setVisible] = React.useState(false);
  const [logItems, setlogItems] = React.useState<RandomNumberData[]>([]);

  const { num1, num2, num3 } = useSelector(
    (state: RootState) => state.randomNumber
  );

  const hideModal = () => setVisible(false);

  const handlePress = () => {
    usePersistRandomNumber(
      dispatch,
      SetNewNumber({
        num1: randomRoll(),
        num2: randomRoll(),
        num3: randomRoll(),
      })
    );
  };

  useEffect(() => {
    async function remove() {
      await removeState();
    }
    remove();
  }, []);

  const handleLogPress = async () => {
    var data = await loadStateRandomNumber();
    setlogItems(data);
    setVisible(true);
  };

  return (
    <Block flex>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{ backgroundColor: "white", padding: 20 }}
        >
          <Block>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>num1</DataTable.Title>
                <DataTable.Title>num2</DataTable.Title>
                <DataTable.Title>num3</DataTable.Title>
              </DataTable.Header>

              {logItems.map((x) => (
                <DataTable.Row>
                  <DataTable.Cell>{x.num1}</DataTable.Cell>
                  <DataTable.Cell>{x.num2}</DataTable.Cell>
                  <DataTable.Cell>{x.num3}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </Block>
        </Modal>
      </Portal>
      <Block center middle color="#01B382">
        <Text white size={50} bold>
          {num1}
        </Text>
      </Block>

      <Block center middle color="#FFAE01">
        <Text white size={50} bold>
          {num2}
        </Text>
      </Block>

      <Block center middle color="#DF367C">
        <Text white size={50} bold>
          {num3}
        </Text>
      </Block>

      <Block flex={0.5} center height={52}>
        <Button
          onPress={handlePress}
          style={{ borderRadius: 32 }}
          primary
          width={"50%"}
          margin
        >
          <Text white center>
            Generate
          </Text>
        </Button>

        <Button
          onPress={handleLogPress}
          style={{ borderRadius: 32 }}
          warning
          width={"20%"}
          margin
        >
          <Text center>log</Text>
        </Button>
      </Block>
    </Block>
  );
}
