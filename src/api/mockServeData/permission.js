import Mock from "mockjs";
export default {
  getMenu: (config) => {
    const { username, password } = JSON.parse(config.body);
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === "admin" && password === "admin") {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: "/home",
              name: "home",
              label: "项目首页",
              icon: "home",
              url: "home/index",
            },
            // {
            //   path: "/mall",
            //   name: "mall",
            //   label: "商品管理",
            //   icon: "video-play",
            //   url: "mall/index",
            // },
            {
              path: "/user",
              name: "user",
              label: "用户管理",
              icon: "user",
              url: "user/index",
            },
            {
              path: "/ticket",
              name: "ticket",
              label: "操作票据",
              icon: "ticket",
              url: "ticket/index",
            },
            {
              path: "/detect",
              name: "detect",
              label: "实时监控",
              icon: "detect",
              url: "detect/index",
            },
            {
              path: "/visual",
              name: "visual",
              label: "可视分析",
              icon: "visual",
              url: "visual/index",
            },
            {
              path: "/introduce",
              name: "introduce",
              label: "项目介绍",
              icon: "introduce",
              url: "introduce/index",
            },
            {
              label: "其他",
              icon: "other",
              children: [
                {
                  path: "/page1",
                  name: "page1",
                  label: "页面1",
                  icon: "setting",
                  url: "other/pageOne.vue",
                },
                {
                  path: "/page2",
                  name: "page2",
                  label: "页面2",
                  icon: "setting",
                  url: "other/pageTwo.vue",
                },
              ],
            },
          ],
          token: Mock.Random.guid(),
          message: "获取成功",
        },
      };
    } else if (username === "xiaoxiao" && password === "xiaoxiao") {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: "/",
              name: "home",
              label: "首页",
              icon: "s-home",
              url: "home/index",
            },
            {
              path: "/video",
              name: "video",
              label: "商品管理",
              icon: "video-play",
              url: "mall/index",
            },
          ],
          token: Mock.Random.guid(),
          message: "获取成功",
        },
      };
    } else {
      return {
        code: -999,
        data: {
          message: "密码错误",
        },
      };
    }
  },
};
