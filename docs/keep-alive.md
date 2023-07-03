## Keep Alive

In your application, whenever user goes from one screen to another from left-drawer-menu, app looses the data on the screen.
In order to prevent it, you can use following code.

### Modify `layouts/MainLayout.vue` as follows.

Change from

```jsx
<q-page-container>
  <router-view />
</q-page-container>
```

To as follows

```jsx
    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
```
