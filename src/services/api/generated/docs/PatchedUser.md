# PatchedUser

Basic user serializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**username** | **string** | Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. | [optional] [default to undefined]
**role** | [**RoleEnum**](RoleEnum.md) |  | [optional] [default to undefined]
**is_active** | **boolean** |  | [optional] [default to undefined]
**last_login** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedUser } from './api';

const instance: PatchedUser = {
    id,
    email,
    username,
    role,
    is_active,
    last_login,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
