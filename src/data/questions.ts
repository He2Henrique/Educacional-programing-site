export const questionsData = [
  // questões de multipla escolha
  {
    id: 'mc1',
    type: 'multiple-choice',
    title: 'Qual das seguintes opções declara corretamente uma variável inteira em C?',
    options: [
      'int x;',
      'integer x;',
      'var x: integer;',
      'x = integer;',
      'declare x as integer;'
    ],
    correctAnswer: 0,
    category: 'syntax'
  },
  {
    id: 'mc2',
    type: 'multiple-choice',
    title: 'Qual é a forma correta de acessar um elemento de um array em C?',
    options: [
      'array[index]',
      'array(index)',
      'array.index',
      'index.array',
      'array->index'
    ],
    correctAnswer: 0,
    category: 'arrays'
  },
  {
    id: 'mc3',
    type: 'multiple-choice',
    title: 'Qual operador é usado para AND lógico em C?',
    options: [
      '&&',
      'AND',
      '&',
      '||',
      'and'
    ],
    correctAnswer: 0,
    category: 'operators'
  },
  {
    id: 'mc4',
    type: 'multiple-choice',
    title: 'Qual é a saída do seguinte código?',
    code: `#include <stdio.h>\n\nint main() {\n  int x = 5, y = 3;\n  printf("%d", x++ * --y);\n  return 0;\n}`,
    options: [
      '10',
      '8',
      '15',
      '9',
      '12'
    ],
    correctAnswer: 1,
    category: 'operators'
  },
  {
    id: 'mc5',
    type: 'multiple-choice',
    title: 'Como você declara uma função que não recebe argumentos e não retorna nada em C?',
    options: [
      'void function();',
      'function void();',
      'void function{};',
      'function(): void;',
      'null function();'
    ],
    correctAnswer: 0,
    category: 'functions'
  },
  
  // Output Questions
  {
    id: 'out1',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int i = 1;\n  while (i < 10) {\n    if (i % 3 == 0) {\n      printf("%d ", i);\n    }\n    i++;\n  }\n  return 0;\n}`,
    correctOutput: '3 6 9 ',
    category: 'control-flow'
  },
  {
    id: 'out2',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int a = 5, b = 3;\n  printf("%d %d %d\\n", a + b, a - b, a * b);\n  return 0;\n}`,
    correctOutput: '8 2 15',
    category: 'operators'
  },
  {
    id: 'out3',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int arr[5] = {10, 20, 30, 40, 50};\n  int *ptr = arr + 2;\n  printf("%d %d", *ptr, *(ptr+1));\n  return 0;\n}`,
    correctOutput: '30 40',
    category: 'pointers'
  },
  
  // Code Correction Questions
  {
    id: 'cor1',
    type: 'correction',
    title: 'Corrija o erro de sintaxe no seguinte código C:',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int x = 10\n  printf("Value: %d", x);\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int x = 10;\n  printf("Value: %d", x);\n  return 0;\n}`,
    hint: 'Verifique a pontuação faltante.',
    category: 'syntax'
  },
  {
    id: 'cor2',
    type: 'correction',
    title: 'Corrija o erro de sintaxe no seguinte código C:',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int arr[3] = {1, 2, 3};\n  printf("%d", arr[3]);\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int arr[3] = {1, 2, 3};\n  printf("%d", arr[2]);\n  return 0;\n}`,
    hint: 'Índices de array em C começam do 0.',
    category: 'arrays'
  },
  {
    id: 'cor3',
    type: 'correction',
    title: 'Corrija o erro de sintaxe no seguinte código C:',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int x;\n  if (x = 10) {\n    printf("x is 10");\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int x;\n  if (x == 10) {\n    printf("x is 10");\n  }\n  return 0;\n}`,
    hint: 'Verifique o operador de comparação.',
    category: 'operators'
  },
  {
    id: 'cor4',
    type: 'correction',
    title: 'Complete a operação abaixo para que o resultado seja maior que 10:',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int x = 5;\n  int y = 3;\n  int resultado = x ___ y; // Substitua ___ pelo operador correto\n  if (resultado > 10) {\n    printf("Resultado maior que 10!");\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int x = 5;\n  int y = 3;\n  int resultado = x * y; // Multiplicação para obter 15\n  if (resultado > 10) {\n    printf("Resultado maior que 10!");\n  }\n  return 0;\n}`,
    hint: 'Pense em qual operação matemática entre 5 e 3 resulta em um número maior que 10.',
    category: 'operators'
  },
  {
    id: 'cor5',
    type: 'correction',
    title: 'Corrija os erros lógicos e de performance no código de classificação de notas:',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  float nota;\n  printf("Digite a nota (0-10): ");\n  scanf("%f", &nota);\n  \n  if (nota < 5) {\n    printf("Reprovado\\n");\n  }\n  if (nota < 7) {\n    printf("Recuperação\\n");\n  }\n  if (nota >= 7) {\n    printf("Aprovado\\n");\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  float nota;\n  printf("Digite a nota (0-10): ");\n  scanf("%f", &nota);\n  \n  if (nota < 0 || nota > 10) {\n    printf("Nota inválida! Digite um valor entre 0 e 10.\\n");\n    return 1;\n  }\n  \n  if (nota < 5) {\n    printf("Reprovado\\n");\n  } else if (nota < 7) {\n    printf("Recuperação\\n");\n  } else {\n    printf("Aprovado\\n");\n  }\n  return 0;\n}`,
    hint: 'Use else if para evitar verificações desnecessárias e adicione validação de entrada.',
    category: 'control-flow'
  },
  
  // Questões de Saída
  {
    id: 'out4',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C? (Observe a lógica invertida!)',
    code: `#include <stdio.h>\n\nint main() {\n  int numero = 4;\n  if (numero % 2 == 0) {\n    printf("Ímpar\\n");\n  } else {\n    printf("Par\\n");\n  }\n  return 0;\n}`,
    correctOutput: 'Ímpar',
    category: 'control-flow'
  }
];