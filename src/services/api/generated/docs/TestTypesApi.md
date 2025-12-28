# TestTypesApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**testTypesCreate**](#testtypescreate) | **POST** /api/v1/test-types/ | |
|[**testTypesDestroy**](#testtypesdestroy) | **DELETE** /api/v1/test-types/{id}/ | |
|[**testTypesList**](#testtypeslist) | **GET** /api/v1/test-types/ | |
|[**testTypesPartialUpdate**](#testtypespartialupdate) | **PATCH** /api/v1/test-types/{id}/ | |
|[**testTypesRetrieve**](#testtypesretrieve) | **GET** /api/v1/test-types/{id}/ | |
|[**testTypesUpdate**](#testtypesupdate) | **PUT** /api/v1/test-types/{id}/ | |

# **testTypesCreate**
> TestType testTypesCreate(testType)


### Example

```typescript
import {
    TestTypesApi,
    Configuration,
    TestType
} from './api';

const configuration = new Configuration();
const apiInstance = new TestTypesApi(configuration);

let testType: TestType; //

const { status, data } = await apiInstance.testTypesCreate(
    testType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testType** | **TestType**|  | |


### Return type

**TestType**

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

# **testTypesDestroy**
> testTypesDestroy()


### Example

```typescript
import {
    TestTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestTypesApi(configuration);

let id: number; //A unique integer value identifying this test type. (default to undefined)

const { status, data } = await apiInstance.testTypesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this test type. | defaults to undefined|


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

# **testTypesList**
> PaginatedTestTypeList testTypesList()


### Example

```typescript
import {
    TestTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestTypesApi(configuration);

let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)

const { status, data } = await apiInstance.testTypesList(
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

**PaginatedTestTypeList**

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

# **testTypesPartialUpdate**
> TestType testTypesPartialUpdate()


### Example

```typescript
import {
    TestTypesApi,
    Configuration,
    PatchedTestType
} from './api';

const configuration = new Configuration();
const apiInstance = new TestTypesApi(configuration);

let id: number; //A unique integer value identifying this test type. (default to undefined)
let patchedTestType: PatchedTestType; // (optional)

const { status, data } = await apiInstance.testTypesPartialUpdate(
    id,
    patchedTestType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedTestType** | **PatchedTestType**|  | |
| **id** | [**number**] | A unique integer value identifying this test type. | defaults to undefined|


### Return type

**TestType**

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

# **testTypesRetrieve**
> TestType testTypesRetrieve()


### Example

```typescript
import {
    TestTypesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestTypesApi(configuration);

let id: number; //A unique integer value identifying this test type. (default to undefined)

const { status, data } = await apiInstance.testTypesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this test type. | defaults to undefined|


### Return type

**TestType**

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

# **testTypesUpdate**
> TestType testTypesUpdate(testType)


### Example

```typescript
import {
    TestTypesApi,
    Configuration,
    TestType
} from './api';

const configuration = new Configuration();
const apiInstance = new TestTypesApi(configuration);

let id: number; //A unique integer value identifying this test type. (default to undefined)
let testType: TestType; //

const { status, data } = await apiInstance.testTypesUpdate(
    id,
    testType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testType** | **TestType**|  | |
| **id** | [**number**] | A unique integer value identifying this test type. | defaults to undefined|


### Return type

**TestType**

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

