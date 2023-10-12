# Configuração do Ambiente:

Variáveis de Ambiente : 
ANDROID_HOME
YARN
ABD

Iniciando um Projeto:
1 - Baixe o Projeto para seu comutador
2 - Abra no terminal ou no Terminado VS code 
3 - Execute o comando npm install ou yarn
4 - Execute para build npm run start ou yarn start
5 - conecte o dipositivo fisico lendo QR code ou Instale um Emulador e escolha a plataforma de acordo com o menu

# Componentes Básicos:

Foi usado uma biblioteca de components pré-modelado, Native Base

Principais componentes : VStack, HStack, Center, Button, Input, Text, FlatList

Eles simulam os componentes nativos do React Native

Estilização:

Os estilos estão contidos dentro do componente com o um tema predefinido, onde toda a aplicação pode usar as cores e tamanhos, cada componente tem seus estilo definidos, mas é possível customizar via propriedades

# Componentes Nativos:

IMAGE PICKER : Usar galeria de fotos
FILE SYSTEM : Informação de um arquivo, tamanho, tipo, formato
PLATAFORM : Responsavel por saber em qual plataforma o projeto está rodando

Gestos e Animações:

Animação de rolagem com scrollView nas telas
Animação bottom/top ao mostrar a Modal 
Animação rolagem em componentes FlatList

# Navegação:

Implementação de navegação entre telas usando bibliotecas como React Navigation.

Stack Navigation: As rotas estão como uma pilha então facilita a navegação caso o usuário queira navegar tanto para IOS como Android

As rotas foram definas no arquivo: route/AppRoutes.tsx


# Renderização de listas de itens usando FlatList ou ScrollView.

# Boas Práticas e Padrões de Código:

- TypeScript : Todos os tipos estão contidos dentro do código
- Arquitetura : MVM
- Prettier para identação do código

 # Diretrio

 * @types : Tipos Especificos 
 * assets : Imagens do aplicativo
 * components : Componentes usados no aplicativo
 * routes: Definição de rotas e configurações de rotas
 * sreens : todas as telas do app
 * theme: tema da aplicação
 * utils : funções de uso na aplicação
 * .elintrc.json : configurações de lint