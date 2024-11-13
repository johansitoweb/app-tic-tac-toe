import React, { useState } from 'react';  
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';  

const TicTacToe = () => {  
  const [board, setBoard] = useState(Array(9).fill(null));  
  const [isXNext, setIsXNext] = useState(true);  

  const handlePress = (index) => {  
    if (board[index] || calculateWinner(board)) return;  

    const newBoard = [...board];  
    newBoard[index] = isXNext ? 'X' : 'O';  
    setBoard(newBoard);  
    setIsXNext(!isXNext);  

    const winner = calculateWinner(newBoard);  
    if (winner) {  
      Alert.alert("Winner!", `${winner} wins!`, [{ text: "OK", onPress: resetGame }]);  
    } else if (!newBoard.includes(null)) {  
      Alert.alert("Draw!", "It's a draw!", [{ text: "OK", onPress: resetGame }]);  
    }  
  };  

  const calculateWinner = (squares) => {  
    const lines = [  
      [0, 1, 2],  
      [3, 4, 5],  
      [6, 7, 8],  
      [0, 3, 6],  
      [1, 4, 7],  
      [2, 5, 8],  
      [0, 4, 8],  
      [2, 4, 6],  
    ];  
    for (let i = 0; i < lines.length; i++) {  
      const [a, b, c] = lines[i];  
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {  
        return squares[a];  
      }  
    }  
    return null;  
  };  

  const resetGame = () => {  
    setBoard(Array(9).fill(null));  
    setIsXNext(true);  
  };  

  return (  
    <View style={styles.container}>  
      <Text style={styles.title}>Tic Tac Toe</Text>  
      <View style={styles.board}>  
        {board.map((value, index) => (  
          <TouchableOpacity  
            key={index}  
            style={styles.cell}  
            onPress={() => handlePress(index)}>  
            <Text style={styles.cellText}>{value}</Text>  
          </TouchableOpacity>  
        ))}  
      </View>  
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#ecf0f1',  
  },  
  title: {  
    fontSize: 24,  
    marginBottom: 20,  
    fontWeight: 'bold',  
  },  
  board: {  
    width: 300,  
    height: 300,  
    flexDirection: 'row',  
    flexWrap: 'wrap',  
  },  
  cell: {  
    width: '33.33%',  
    height: '33.33%',  
    justifyContent: 'center',  
    alignItems: 'center',  
    borderWidth: 1,  
    borderColor: '#333',  
    backgroundColor: '#fff',  
  },  
  cellText: {  
    fontSize: 48,  
    fontWeight: 'bold',  
    color: '#333',  
  },  
});  

export default TicTacToe;