# Monoce
Modern, fast, simple KV storage.

## Installing

Using npm (or yarn):
```bash
$ npm install monoce # or yarn add monoce
```

## Example

⚠️ Warning! - Currently, you can create database only this web site: [https://www.monoce.com](https://www.monoce.com) (later you can use self-hosted the Monoce)

Use for TypeScript:

```ts
import { MonoceInstance } from 'monoce'
```

Use for JavaScript:
```js
const { MonoceInstance } = require('monoce')
```

❗ Worked copy-past example:
```js
const monoce = new MonoceInstance({ database: 'monoce', token: '43d51bef-c1eb-43db-b961-58f4ad9a105e' })

const requestInitialization = async () => {
  const setRequest = await monoce.set({
    document: 'monoce',
    payload: {
      AnyJSONPayload: 'AnyJSONValue'
    }
  })

  console.log(setRequest)
  /** 
   * {
   *  AnyJSONPayload: 'AnyJSONValue'
   * }
  */

  const getRequest = await monoce.get({
    document: 'monoce'
  })

  console.log(getRequest)
  /** 
   * {
   *  AnyJSONPayload: 'AnyJSONValue'
   * }
  */

  const updateRequest = await monoce.update({
    document: 'monoce',
    payload: {
      AnyOtherJSONPayload: 'AnyOtherJSONValue'
    }
  })

  console.log(updateRequest)
  /** 
   * {
   *  AnyJSONPayload: 'AnyJSONValue',
   *  AnyOtherJSONPayload: 'AnyOtherJSONValue'
   * }
  */

  const deleteRequest = await monoce.delete({
    document: 'monoce'
  })

  console.log(deleteRequest)
  /** 
   * {
   *  databse: 'monoce',
   *  document: 'monoce'
   * }
  */

}

requestInitialization()
```

