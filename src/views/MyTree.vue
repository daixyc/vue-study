<template>
  <div class="tree-menu">
    <ul v-for="(menuItem, index) in demo.arr" :key="index">
      <my-tree :demoValue="menuItem"></my-tree>
    </ul>
  </div>
</template>

<script>
import myTree from "../components/TreeFolder";
import mock from "mockjs";
export default {
  name: "myDemo",
  data() {
    return {
      demo: mock.mock({
        // "id|+1": 1,
        // name: "@cname",
        // "age|18-50": 18,
        "arr|2-5": [
          {
            name: "@cname",
            "age|1-10": 2,
            "children|0-3": [
              {
                name: "@cname",
                "age|11-20": 10,
                "children|0-4": [
                  {
                    name: "@cname",
                    "age|21-30": 21,
                    "children|0-4": [
                      {
                        name: "@cname",
                        "age|31-40": 31
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      })
    };
  },
  components: {
    "my-tree": myTree
  }
};
</script>
