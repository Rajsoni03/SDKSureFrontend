# BoardsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**boardsCreate**](#boardscreate) | **POST** /api/v1/boards/ | |
|[**boardsDestroy**](#boardsdestroy) | **DELETE** /api/v1/boards/{id}/ | |
|[**boardsList**](#boardslist) | **GET** /api/v1/boards/ | |
|[**boardsLogsRetrieve**](#boardslogsretrieve) | **GET** /api/v1/boards/{id}/logs/ | |
|[**boardsPartialUpdate**](#boardspartialupdate) | **PATCH** /api/v1/boards/{id}/ | |
|[**boardsRetrieve**](#boardsretrieve) | **GET** /api/v1/boards/{id}/ | |
|[**boardsUpdate**](#boardsupdate) | **PUT** /api/v1/boards/{id}/ | |

# **boardsCreate**
> Board boardsCreate(board)

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration,
    Board
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let board: Board; //

const { status, data } = await apiInstance.boardsCreate(
    board
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **board** | **Board**|  | |


### Return type

**Board**

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

# **boardsDestroy**
> boardsDestroy()

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let id: number; //A unique integer value identifying this board. (default to undefined)

const { status, data } = await apiInstance.boardsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this board. | defaults to undefined|


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

# **boardsList**
> PaginatedBoardList boardsList()

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let baudRate: 115200 | 19200 | 38400 | 57600 | 9600; //* `9600` - 9600 * `19200` - 19200 * `38400` - 38400 * `57600` - 57600 * `115200` - 115200 (optional) (default to undefined)
let name: string; // (optional) (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)
let status: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.boardsList(
    baudRate,
    name,
    ordering,
    page,
    search,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **baudRate** | [**115200 | 19200 | 38400 | 57600 | 9600**]**Array<115200 &#124; 19200 &#124; 38400 &#124; 57600 &#124; 9600>** | * &#x60;9600&#x60; - 9600 * &#x60;19200&#x60; - 19200 * &#x60;38400&#x60; - 38400 * &#x60;57600&#x60; - 57600 * &#x60;115200&#x60; - 115200 | (optional) defaults to undefined|
| **name** | [**string**] |  | (optional) defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|


### Return type

**PaginatedBoardList**

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

# **boardsLogsRetrieve**
> Board boardsLogsRetrieve()

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let id: number; //A unique integer value identifying this board. (default to undefined)

const { status, data } = await apiInstance.boardsLogsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this board. | defaults to undefined|


### Return type

**Board**

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

# **boardsPartialUpdate**
> Board boardsPartialUpdate()

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration,
    PatchedBoard
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let id: number; //A unique integer value identifying this board. (default to undefined)
let patchedBoard: PatchedBoard; // (optional)

const { status, data } = await apiInstance.boardsPartialUpdate(
    id,
    patchedBoard
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedBoard** | **PatchedBoard**|  | |
| **id** | [**number**] | A unique integer value identifying this board. | defaults to undefined|


### Return type

**Board**

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

# **boardsRetrieve**
> Board boardsRetrieve()

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let id: number; //A unique integer value identifying this board. (default to undefined)

const { status, data } = await apiInstance.boardsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this board. | defaults to undefined|


### Return type

**Board**

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

# **boardsUpdate**
> Board boardsUpdate(board)

CRUD operations for boards.

### Example

```typescript
import {
    BoardsApi,
    Configuration,
    Board
} from './api';

const configuration = new Configuration();
const apiInstance = new BoardsApi(configuration);

let id: number; //A unique integer value identifying this board. (default to undefined)
let board: Board; //

const { status, data } = await apiInstance.boardsUpdate(
    id,
    board
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **board** | **Board**|  | |
| **id** | [**number**] | A unique integer value identifying this board. | defaults to undefined|


### Return type

**Board**

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

