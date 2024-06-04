import { useState } from 'react'
import { Button, FlatList, StyleSheet, View } from 'react-native'
import GoalItem from './components/GoalItem'
import { CourseGoal } from './types'
import GoalInput from './components/GoalInput'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([])
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  function startAddGoalHandler() {
    setModalVisible(true)
  }

  function endAddGoalHandler() {
    setModalVisible(false)
  }

  function addGoalHandler(enteredGoalText: string) {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      {
        id:
          courseGoals.length > 0
            ? courseGoals[courseGoals.length - 1].id + 1
            : 1,
        courseGoalValue: enteredGoalText,
      },
    ])
    setModalVisible(false)
  }

  function deleteGoalHandler(id: number) {
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#b180f0"
          onPress={startAddGoalHandler}
        />
        {modalVisible && (
          <GoalInput
            visible={modalVisible}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <GoalItem item={item} onDeleteItem={deleteGoalHandler} />
            )}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
})
