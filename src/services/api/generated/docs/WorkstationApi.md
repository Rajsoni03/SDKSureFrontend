# WorkstationsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**workstationsCreate**](#workstationscreate) | **POST** /api/v1/workstations/ | |
|[**workstationsDestroy**](#workstationsdestroy) | **DELETE** /api/v1/workstations/{id}/ | |
|[**workstationsList**](#workstationslist) | **GET** /api/v1/workstations/ | |
|[**workstationsPartialUpdate**](#workstationspartialupdate) | **PATCH** /api/v1/workstations/{id}/ | |
|[**workstationsRetrieve**](#workstationsretrieve) | **GET** /api/v1/workstations/{id}/ | |
|[**workstationsUpdate**](#workstationsupdate) | **PUT** /api/v1/workstations/{id}/ | |

# **workstationsCreate**
> Workstation workstationsCreate(workstation)

CRUD operations for test PCs.

### Example

```typescript
import {
    WorkstationsApi,
    Configuration,
    Workstation
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkstationsApi(configuration);

let workstation: Workstation; //

const { status, data } = await apiInstance.workstationsCreate(
    workstation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workstation** | **Workstation**|  | |


### Return type

**Workstation**

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

# **workstationsDestroy**
> workstationsDestroy()

CRUD operations for test PCs.

### Example

```typescript
import {
    WorkstationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkstationsApi(configuration);

let id: string; //A UUID string identifying this Workstation. (default to undefined)

const { status, data } = await apiInstance.workstationsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | A UUID string identifying this Workstation. | defaults to undefined|


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

# **workstationsList**
> PaginatedWorkstationList workstationsList()

CRUD operations for test PCs.

### Example

```typescript
import {
    WorkstationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkstationsApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.workstationsList(
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

**PaginatedWorkstationList**

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

# **workstationsPartialUpdate**
> Workstation workstationsPartialUpdate()

CRUD operations for test PCs.

### Example

```typescript
import {
    WorkstationsApi,
    Configuration,
    PatchedWorkstation
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkstationsApi(configuration);

let id: string; //A UUID string identifying this Workstation. (default to undefined)
let patchedWorkstation: PatchedWorkstation; // (optional)

const { status, data } = await apiInstance.workstationsPartialUpdate(
    id,
    patchedWorkstation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedWorkstation** | **PatchedWorkstation**|  | |
| **id** | [**string**] | A UUID string identifying this Workstation. | defaults to undefined|


### Return type

**Workstation**

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

# **workstationsRetrieve**
> Workstation workstationsRetrieve()

CRUD operations for test PCs.

### Example

```typescript
import {
    WorkstationsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkstationsApi(configuration);

let id: string; //A UUID string identifying this Workstation. (default to undefined)

const { status, data } = await apiInstance.workstationsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | A UUID string identifying this Workstation. | defaults to undefined|


### Return type

**Workstation**

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

# **workstationsUpdate**
> Workstation workstationsUpdate(workstation)

CRUD operations for test PCs.

### Example

```typescript
import {
    WorkstationsApi,
    Configuration,
    Workstation
} from './api';

const configuration = new Configuration();
const apiInstance = new WorkstationsApi(configuration);

let id: string; //A UUID string identifying this Workstation. (default to undefined)
let workstation: Workstation; //

const { status, data } = await apiInstance.workstationsUpdate(
    id,
    workstation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workstation** | **Workstation**|  | |
| **id** | [**string**] | A UUID string identifying this Workstation. | defaults to undefined|


### Return type

**Workstation**

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

