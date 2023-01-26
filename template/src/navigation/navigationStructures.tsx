import {COLORS} from 'src/theme';

/*
In this file we will define our structure roots
*/


export const loginRoot = {
  root: {
    stack: {
      id: 'LOGIN_STACK',
      children: [
        {
          component: {
            name: 'Login',
            options: {
              topBar: {
                visible: false,
              },
            },
          },
        },
      ],
    },
  },
};

export const signUpRoot = {
  root: {
    stack: {
      id: 'SIGN_UP_STACK',
      children: [
        {
          component: {
            name: 'SignUpView',
            options: {
              topBar: {
                visible: false,
              },
            },
          },
        },
      ],
    },
  },
};

export const StartRoot = {
  root: {
    stack: {
      id: 'START_ROOT',
      children: [
        {
          component: {
            name: 'StartView',
            options: {
              topBar: {
                visible: false,
              },
            },
          },
        },
      ],
    },
  },
};

const HOME_STACK = {
  stack: {
    children: [
      {
        id: 'HOME-SCREEN',
        component: {
          id: 'HOME_SCREEN',
          name: 'Home',
          options: {
            topBar: {
              visible: true,
              title: {
                text: 'Home',
              },
              searchBar: {
                visible: false,
                hideOnScroll: true,
                hideTopBarOnFocus: true,
              },
              largeTitle: {
                visible: true,
                fontSize: 25,
                // fontFamily: 'Roboto',
              },
              // rightButtons: profileIcon,
            },
          },
        },
      },
    ],
  },
};

export const mainRoot = {
  root: {
    ...HOME_STACK
  },
};
