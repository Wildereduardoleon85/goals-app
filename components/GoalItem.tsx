import { Pressable, StyleSheet, Text, View } from 'react-native'
import { CourseGoal } from '../types'

type GoalItemProps = {
  item: CourseGoal
  onDeleteItem: (id: number) => void
}

function GoalItem({ item, onDeleteItem }: Readonly<GoalItemProps>) {
  function onGoalPressHandler() {
    onDeleteItem(item.id)
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onGoalPressHandler}
      >
        <Text style={styles.goalItemText}>{item.courseGoalValue}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goalItemText: {
    color: 'white',
    padding: 8,
  },
})

export default GoalItem
