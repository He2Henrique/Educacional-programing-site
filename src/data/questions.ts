export const questionsData = [
  // questões de multipla escolha
  {
    id: 'mc1',
    type: 'multiple-choice',
    title: 'Qual das seguintes opções declara corretamente uma variável inteira em C?',
    options: [
      'integer x;',
      'var x: integer;',
      'int x;',
      'x = integer;',
      'declare x as integer;'
    ],
    correctAnswer: 2,
    category: 'sintaxe'
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
    category: 'operadores'
  },
  {
    id: 'mc6',
    type: 'multiple-choice',
    title: 'Qual é a melhor estrutura de controle para implementar a seguinte regra de negócio: "Se o cliente tem mais de 18 anos E tem renda maior que R$2000, então pode solicitar o empréstimo"?',
    options: [
      
      'if (idade >= 18 || renda >= 2000)',
      'if (idade > 18 || renda > 2000)',
      'if (idade >= 18 && renda >= 2000)',
      'if (idade > 18 && renda > 2000)',
      'if (idade > 18 && renda >= 2000)'
    ],
    correctAnswer: 3,
    category: 'requisitos'
  },
  {
    id: 'mc7',
    type: 'multiple-choice',
    title: 'Qual estrutura de controle é mais apropriada para implementar um menu com 5 opções diferentes?',
    options: [
      
      'if-else if-else',
      'while loop',
      'for loop',
      'do-while loop',
      'switch-case'
    ],
    correctAnswer: 4,
    category: 'fluxo-controle'
  },
  {
    id: 'mc8',
    type: 'multiple-choice',
    title: 'Qual é a melhor forma de implementar a regra: "O produto só pode ser vendido se estiver em estoque E o cliente tiver saldo suficiente"?',
    options: [
      
      'if (estoque >= 0 || saldo > preco)',
      'if (estoque > 0 && saldo >= preco)',
      'if (estoque > 0 || saldo >= preco)',
      'if (estoque >= 0 && saldo > preco)',
      'if (estoque > 0 && saldo > preco)'
    ],
    correctAnswer: 1,
    category: 'requisitos'
  },
  {
    id: 'mc9',
    type: 'multiple-choice',
    title: 'Qual loop é mais apropriado quando você precisa executar o código pelo menos uma vez antes de verificar a condição?',
    options: [
      
      'while',
      'for',
      'if-else',
      'switch',
      'do-while'
    ],
    correctAnswer: 4,
    category: 'fluxo-controle'
  },
  {
    id: 'mc10',
    type: 'multiple-choice',
    title: 'Qual é a melhor forma de implementar a regra: "O usuário pode acessar o sistema se for admin OU se tiver permissão específica"?',
    options: [
      
      'if (isAdmin && temPermissao)',
      'if (isAdmin || !temPermissao)',
      'if (isAdmin || temPermissao)',
      'if (!isAdmin && temPermissao)',
      'if (isAdmin && !temPermissao)'
    ],
    correctAnswer: 2,
    category: 'requisitos'
  },
  {
    id: 'mc11',
    type: 'multiple-choice',
    title: 'Qual é a forma correta de declarar uma constante em C?',
    options: [
      'const int MAX = 100;',
      'define MAX 100;',
      'constant MAX = 100;',
      'final int MAX = 100;',
      'int const MAX = 100;'
    ],
    correctAnswer: 0,
    category: 'sintaxe'
  },
  
  // Output Questions
  {
    id: 'out1',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int i = 1;\n  while (i < 10) {\n    if (i % 3 == 0) {\n      printf("%d ", i);\n    }\n    i++;\n  }\n  return 0;\n}`,
    correctOutput: '3 6 9 ',
    category: 'fluxo-controle'
  },
  {
    id: 'out2',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int a = 5, b = 3;\n  printf("%d %d %d\\n", a + b, a - b, a * b);\n  return 0;\n}`,
    correctOutput: '8 2 15',
    category: 'operadores'
  },
  {
    id: 'out4',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C? (Observe a lógica invertida!)',
    code: `#include <stdio.h>\n\nint main() {\n  int numero = 4;\n  if (numero % 2 == 0) {\n    printf("Ímpar\\n");\n  } else {\n    printf("Par\\n");\n  }\n  return 0;\n}`,
    correctOutput: 'Ímpar',
    category: 'fluxo-controle'
  },
  {
    id: 'out5',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int i = 1;\n  do {\n    printf("%d ", i);\n    i += 2;\n  } while (i <= 5);\n  return 0;\n}`,
    correctOutput: '1 3 5 ',
    category: 'fluxo-controle'
  },
  {
    id: 'out6',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int x = 5;\n  switch (x) {\n    case 1: printf("Um"); break;\n    case 2: printf("Dois"); break;\n    case 3: printf("Três"); break;\n    case 4: printf("Quatro"); break;\n    case 5: printf("Cinco"); break;\n    default: printf("Outro");\n  }\n  return 0;\n}`,
    correctOutput: 'Cinco',
    category: 'fluxo-controle'
  },
  {
    id: 'out7',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int i;\n  for (i = 0; i < 5; i++) {\n    if (i == 2) continue;\n    printf("%d ", i);\n  }\n  return 0;\n}`,
    correctOutput: '0 1 3 4 ',
    category: 'fluxo-controle'
  },
  {
    id: 'out8',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int x = 10, y = 5;\n  if (x > y) {\n    if (x > 15) {\n      printf("A");\n    } else {\n      printf("B");\n    }\n  } else {\n    printf("C");\n  }\n  return 0;\n}`,
    correctOutput: 'B',
    category: 'fluxo-controle'
  },
  {
    id: 'out9',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int i = 0;\n  while (i < 3) {\n    int j = 0;\n    while (j < 2) {\n      printf("%d%d ", i, j);\n      j++;\n    }\n    i++;\n  }\n  return 0;\n}`,
    correctOutput: '00 01 10 11 20 21 ',
    category: 'fluxo-controle'
  },
  {
    id: 'out10',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int x = 1;\n  do {\n    printf("%d ", x);\n    x *= 2;\n  } while (x < 10);\n  return 0;\n}`,
    correctOutput: '1 2 4 8 ',
    category: 'fluxo-controle'
  },
  {
    id: 'out11',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int i;\n  for (i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n      printf("Par ");\n    } else {\n      printf("Ímpar ");\n    }\n  }\n  return 0;\n}`,
    correctOutput: 'Ímpar Par Ímpar Par Ímpar ',
    category: 'fluxo-controle'
  },
  {
    id: 'out12',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int x = 5;\n  switch (x) {\n    case 1: case 2: case 3:\n      printf("Pequeno");\n      break;\n    case 4: case 5: case 6:\n      printf("Médio");\n      break;\n    default:\n      printf("Grande");\n  }\n  return 0;\n}`,
    correctOutput: 'Médio',
    category: 'fluxo-controle'
  },
  {
    id: 'out13',
    type: 'output',
    title: 'Qual é a saída do seguinte programa em C?',
    code: `#include <stdio.h>\n\nint main() {\n  int x = 5;\n  int y = 3;\n  x = x + y;\n  y = x - y;\n  x = x - y;\n  printf("x = %d, y = %d", x, y);\n  return 0;\n}`,
    correctOutput: 'x = 3, y = 5',
    category: 'operadores'
  },
  
  // Code Correction Questions
  {
    id: 'cor1',
    type: 'correction',
    title: 'Corrija o erro de sintaxe no seguinte código C:',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int x = 10\n  printf("Value: %d", x);\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int x = 10;\n  printf("Value: %d", x);\n  return 0;\n}`,
    hint: 'Verifique a pontuação faltante.',
    category: 'sintaxe'
  },
  {
    id: 'cor3',
    type: 'correction',
    title: 'Corrija o erro de sintaxe no seguinte código C:',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int x;\n  if (x = 10) {\n    printf("x is 10");\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int x;\n  if (x == 10) {\n    printf("x is 10");\n  }\n  return 0;\n}`,
    hint: 'Verifique o operador de comparação.',
    category: 'operadores'
  },
  {
    id: 'cor4',
    type: 'correction',
    title: 'Complete a operação abaixo para que o resultado seja maior que 10:',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int x = 5;\n  int y = 3;\n  int resultado = x ___ y; // Substitua ___ pelo operador correto\n  if (resultado > 10) {\n    printf("Resultado maior que 10!");\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int x = 5;\n  int y = 3;\n  int resultado = x * y; // Multiplicação para obter 15\n  if (resultado > 10) {\n    printf("Resultado maior que 10!");\n  }\n  return 0;\n}`,
    hint: 'Pense em qual operação matemática entre 5 e 3 resulta em um número maior que 10.',
    category: 'operadores'
  },
  {
    id: 'cor5',
    type: 'correction',
    title: 'Corrija os erros lógicos e de performance no código de classificação de notas:',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  float nota;\n  printf("Digite a nota (0-10): ");\n  scanf("%f", &nota);\n  \n  if (nota < 5) {\n    printf("Reprovado\\n");\n  }\n  if (nota < 7) {\n    printf("Recuperação\\n");\n  }\n  if (nota >= 7) {\n    printf("Aprovado\\n");\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  float nota;\n  printf("Digite a nota (0-10): ");\n  scanf("%f", &nota);\n  \n  if (nota < 0 || nota > 10) {\n    printf("Nota inválida! Digite um valor entre 0 e 10.\\n");\n    return 1;\n  }\n  \n  if (nota < 5) {\n    printf("Reprovado\\n");\n  } else if (nota < 7) {\n    printf("Recuperação\\n");\n  } else {\n    printf("Aprovado\\n");\n  }\n  return 0;\n}`,
    hint: 'Use else if para evitar verificações desnecessárias e adicione validação de entrada.',
    category: 'fluxo-controle'
  },
  {
    id: 'cor6',
    type: 'correction',
    title: 'Corrija o código para implementar corretamente a regra: "Se a temperatura estiver acima de 30°C OU a umidade estiver acima de 80%, ligue o ar condicionado"',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  float temperatura = 35.0;\n  float umidade = 75.0;\n  \n  if (temperatura > 30 && umidade > 80) {\n    printf("Ligando ar condicionado\\n");\n  } else {\n    printf("Ar condicionado desligado\\n");\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  float temperatura = 35.0;\n  float umidade = 75.0;\n  \n  if (temperatura > 30 || umidade > 80) {\n    printf("Ligando ar condicionado\\n");\n  } else {\n    printf("Ar condicionado desligado\\n");\n  }\n  return 0;\n}`,
    hint: 'Use o operador OR (||) para implementar a regra corretamente.',
    category: 'requisitos'
  },
  {
    id: 'cor7',
    type: 'correction',
    title: 'Corrija o código para implementar um menu de opções usando switch-case',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int opcao = 2;\n  \n  if (opcao == 1) {\n    printf("Opção 1 selecionada\\n");\n  } else if (opcao == 2) {\n    printf("Opção 2 selecionada\\n");\n  } else if (opcao == 3) {\n    printf("Opção 3 selecionada\\n");\n  } else {\n    printf("Opção inválida\\n");\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int opcao = 2;\n  \n  switch (opcao) {\n    case 1:\n      printf("Opção 1 selecionada\\n");\n      break;\n    case 2:\n      printf("Opção 2 selecionada\\n");\n      break;\n    case 3:\n      printf("Opção 3 selecionada\\n");\n      break;\n    default:\n      printf("Opção inválida\\n");\n  }\n  return 0;\n}`,
    hint: 'Use switch-case para menus com múltiplas opções.',
    category: 'fluxo-controle'
  },
  {
    id: 'cor8',
    type: 'correction',
    title: 'Corrija o código para implementar um loop que soma números até que a soma seja maior que 100',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int soma = 0;\n  int numero = 1;\n  \n  while (soma < 100) {\n    soma = soma + numero;\n    numero = numero + 1;\n  }\n  printf("Soma final: %d\\n", soma);\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int soma = 0;\n  int numero = 1;\n  \n  while (soma <= 100) {\n    soma += numero;\n    numero++;\n  }\n  printf("Soma final: %d\\n", soma);\n  return 0;\n}`,
    hint: 'Use operadores de atribuição composta e incremento para melhor legibilidade.',
    category: 'fluxo-controle'
  },
  {
    id: 'cor9',
    type: 'correction',
    title: 'Corrija o código para implementar a regra: "Se o aluno tiver nota maior ou igual a 7 E frequência maior ou igual a 75%, então está aprovado"',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  float nota = 8.5;\n  float frequencia = 80.0;\n  \n  if (nota >= 7 || frequencia >= 75) {\n    printf("Aluno aprovado\\n");\n  } else {\n    printf("Aluno reprovado\\n");\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  float nota = 8.5;\n  float frequencia = 80.0;\n  \n  if (nota >= 7 && frequencia >= 75) {\n    printf("Aluno aprovado\\n");\n  } else {\n    printf("Aluno reprovado\\n");\n  }\n  return 0;\n}`,
    hint: 'Use o operador AND (&&) para implementar a regra corretamente.',
    category: 'requisitos'
  },
  {
    id: 'cor10',
    type: 'correction',
    title: 'Corrija o código para implementar um loop que imprime os números pares de 1 a 10',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int i;\n  for (i = 1; i <= 10; i++) {\n    printf("%d ", i);\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int i;\n  for (i = 2; i <= 10; i += 2) {\n    printf("%d ", i);\n  }\n  return 0;\n}`,
    hint: 'Inicie o loop em 2 e incremente de 2 em 2 para pegar apenas números pares.',
    category: 'fluxo-controle'
  },
  {
    id: 'cor11',
    type: 'correction',
    title: 'Corrija o código para implementar a regra: "O sistema deve verificar se o usuário tem idade maior que 18 anos E não está bloqueado"',
    buggyCode: `#include <stdio.h>\n\nint main() {\n  int idade = 20;\n  int bloqueado = 0;\n  \n  if (idade > 18 || !bloqueado) {\n    printf("Acesso permitido\\n");\n  } else {\n    printf("Acesso negado\\n");\n  }\n  return 0;\n}`,
    correctCode: `#include <stdio.h>\n\nint main() {\n  int idade = 20;\n  int bloqueado = 0;\n  \n  if (idade > 18 && !bloqueado) {\n    printf("Acesso permitido\\n");\n  } else {\n    printf("Acesso negado\\n");\n  }\n  return 0;\n}`,
    hint: 'Use o operador AND (&&) para garantir que ambas as condições sejam verdadeiras.',
    category: 'requisitos'
  }
];