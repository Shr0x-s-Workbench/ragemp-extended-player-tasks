A quick script allowing you to execute 'client-side' player tasks from the server.
# Requirements
> RAGEMP Types must be installed  [RAGEMP TYPES](https://github.com/ragempcommunity/ragemp-types)<br>
> Basic typescript knowledge

# Installation
**Client Side**<br>
Drop `tasks.client.ts` anywhere within your client side code and then import `tasks.client.ts` at your main client-side file initializer
EG:
```ts
import "./path/to/tasks.client"
```

**Server Side**<br>
Drop `task.server.ts` anywhere within your server side code and then import `task.server.ts` to your main server side initializer
EG:
```ts
import "path/to/task.server"
```

**Server side definitions**<br>
The definitions of new player tasks are described at `index.d.ts`, if you're using `global` namespace simply extend the `PlayerMp` interface there, if not then describe them where your ragemp types are.


# Example Usage
```ts
const player = mp.players.at(0);
player.taskReloadWeapon(true); //reload player's weapon
```
There's around 107 task methods you can call.