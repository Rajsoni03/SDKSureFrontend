# AuthenticationApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authLoginCreate**](#authlogincreate) | **POST** /api/v1/auth/login/ | Login to obtain access and refresh tokens|
|[**authRefreshCreate**](#authrefreshcreate) | **POST** /api/v1/auth/refresh/ | Refresh access token|
|[**usersCreate**](#userscreate) | **POST** /api/v1/users/ | |
|[**usersDestroy**](#usersdestroy) | **DELETE** /api/v1/users/{id}/ | |
|[**usersList**](#userslist) | **GET** /api/v1/users/ | |
|[**usersPartialUpdate**](#userspartialupdate) | **PATCH** /api/v1/users/{id}/ | |
|[**usersRetrieve**](#usersretrieve) | **GET** /api/v1/users/{id}/ | |
|[**usersUpdate**](#usersupdate) | **PUT** /api/v1/users/{id}/ | |

# **authLoginCreate**
> TokenObtainPair authLoginCreate(tokenObtainPair)

JWT login endpoint (email/username + password).

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    TokenObtainPair
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let tokenObtainPair: TokenObtainPair; //

const { status, data } = await apiInstance.authLoginCreate(
    tokenObtainPair
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenObtainPair** | **TokenObtainPair**|  | |


### Return type

**TokenObtainPair**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authRefreshCreate**
> TokenRefresh authRefreshCreate(tokenRefresh)

JWT refresh endpoint.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    TokenRefresh
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let tokenRefresh: TokenRefresh; //

const { status, data } = await apiInstance.authRefreshCreate(
    tokenRefresh
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tokenRefresh** | **TokenRefresh**|  | |


### Return type

**TokenRefresh**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersCreate**
> User usersCreate(user)

User management endpoints.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let user: User; //

const { status, data } = await apiInstance.usersCreate(
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User**|  | |


### Return type

**User**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersDestroy**
> usersDestroy()

User management endpoints.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)

const { status, data } = await apiInstance.usersDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersList**
> PaginatedUserList usersList()

User management endpoints.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.usersList(
    ordering,
    page,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|


### Return type

**PaginatedUserList**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersPartialUpdate**
> User usersPartialUpdate()

User management endpoints.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    PatchedUser
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)
let patchedUser: PatchedUser; // (optional)

const { status, data } = await apiInstance.usersPartialUpdate(
    id,
    patchedUser
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedUser** | **PatchedUser**|  | |
| **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined|


### Return type

**User**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersRetrieve**
> User usersRetrieve()

User management endpoints.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)

const { status, data } = await apiInstance.usersRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined|


### Return type

**User**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersUpdate**
> User usersUpdate(user)

User management endpoints.

### Example

```typescript
import {
    AuthenticationApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthenticationApi(configuration);

let id: number; //A unique integer value identifying this user. (default to undefined)
let user: User; //

const { status, data } = await apiInstance.usersUpdate(
    id,
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User**|  | |
| **id** | [**number**] | A unique integer value identifying this user. | defaults to undefined|


### Return type

**User**

### Authorization

[cookieAuth](../README.md#cookieAuth), [jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

