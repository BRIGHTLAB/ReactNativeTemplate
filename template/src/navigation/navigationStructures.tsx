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

export const HOME_PAGE_STACK = {
    stack: {
      id: 'HOME_PAGE_STACK',
      children: [
        {
          component: {
            name: 'Home',
            options: {
              topBar: {
                visible: true,
                title: {
                  text: 'Home',
                  alignment: 'center',
                  color: 'black',
                  // fontFamily: 'Inter-SemiBold',
                  fontSize: 20,
                },
                background: {
                  color: 'white',
                },
              },
              bottomTab: {
                // icon: IMAGES.bills,
                iconColor: 'grey',
                text: 'Home',
                textColor: 'black',
                fontSize: 12,
                selectedTextColor: 'black', 
              },
              animations: {
                push: {
                  enabled: false,
                },
              },
            },
          },
        },
      ],
    },
  }

  export const SETTINGS_PAGE_STACK = {
    stack: {
      id: 'HOME_PAGE_STACK',
      children: [
        {
          component: {
            name: 'SettingListView',
            options: {
              topBar: {
                visible: true,
                title: {
                  text: 'Settings',
                  alignment: 'center',
                  color: 'black',
                  // fontFamily: 'Inter-SemiBold',
                  fontSize: 20,
                },
                background: {
                  color: 'white',
                },
              },
              bottomTab: {
                // icon: IMAGES.bills,
                iconColor: 'grey',
                text: 'Settings',
                textColor: 'black',
                fontSize: 12,
                selectedTextColor: 'black', 
              },
              animations: {
                push: {
                  enabled: false,
                },
              },
            },
          },
        },
      ],
    },
  }

export const mainRoot = {
  root: {
    bottomTabs: {
      id: 'BOTTOM_STACK',
      children: [
        HOME_PAGE_STACK,
        SETTINGS_PAGE_STACK,
      ],
      options: {
        bottomTabs: {
          backgroundColor: 'white',
          animate: false,
          titleDisplayMode: 'alwaysShow',
        },
      },
    },
  },
};
