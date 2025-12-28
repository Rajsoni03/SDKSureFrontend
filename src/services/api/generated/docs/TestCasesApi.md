# TestCasesApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**testCasesCreate**](#testcasescreate) | **POST** /api/v1/test-cases/ | |
|[**testCasesDestroy**](#testcasesdestroy) | **DELETE** /api/v1/test-cases/{id}/ | |
|[**testCasesList**](#testcaseslist) | **GET** /api/v1/test-cases/ | |
|[**testCasesPartialUpdate**](#testcasespartialupdate) | **PATCH** /api/v1/test-cases/{id}/ | |
|[**testCasesRetrieve**](#testcasesretrieve) | **GET** /api/v1/test-cases/{id}/ | |
|[**testCasesUpdate**](#testcasesupdate) | **PUT** /api/v1/test-cases/{id}/ | |

# **testCasesCreate**
> TestCase testCasesCreate(testCase)

CRUD endpoints for test cases.

### Example

```typescript
import {
    TestCasesApi,
    Configuration,
    TestCase
} from './api';

const configuration = new Configuration();
const apiInstance = new TestCasesApi(configuration);

let testCase: TestCase; //

const { status, data } = await apiInstance.testCasesCreate(
    testCase
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testCase** | **TestCase**|  | |


### Return type

**TestCase**

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

# **testCasesDestroy**
> testCasesDestroy()

CRUD endpoints for test cases.

### Example

```typescript
import {
    TestCasesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestCasesApi(configuration);

let id: number; //A unique integer value identifying this test case. (default to undefined)

const { status, data } = await apiInstance.testCasesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this test case. | defaults to undefined|


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

# **testCasesList**
> PaginatedTestCaseList testCasesList()

CRUD endpoints for test cases.

### Example

```typescript
import {
    TestCasesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestCasesApi(configuration);

let isActive: boolean; // (optional) (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)
let testType: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.testCasesList(
    isActive,
    ordering,
    page,
    search,
    testType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isActive** | [**boolean**] |  | (optional) defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|
| **testType** | [**number**] |  | (optional) defaults to undefined|


### Return type

**PaginatedTestCaseList**

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

# **testCasesPartialUpdate**
> TestCase testCasesPartialUpdate()

CRUD endpoints for test cases.

### Example

```typescript
import {
    TestCasesApi,
    Configuration,
    PatchedTestCase
} from './api';

const configuration = new Configuration();
const apiInstance = new TestCasesApi(configuration);

let id: number; //A unique integer value identifying this test case. (default to undefined)
let patchedTestCase: PatchedTestCase; // (optional)

const { status, data } = await apiInstance.testCasesPartialUpdate(
    id,
    patchedTestCase
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedTestCase** | **PatchedTestCase**|  | |
| **id** | [**number**] | A unique integer value identifying this test case. | defaults to undefined|


### Return type

**TestCase**

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

# **testCasesRetrieve**
> TestCase testCasesRetrieve()

CRUD endpoints for test cases.

### Example

```typescript
import {
    TestCasesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestCasesApi(configuration);

let id: number; //A unique integer value identifying this test case. (default to undefined)

const { status, data } = await apiInstance.testCasesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this test case. | defaults to undefined|


### Return type

**TestCase**

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

# **testCasesUpdate**
> TestCase testCasesUpdate(testCase)

CRUD endpoints for test cases.

### Example

```typescript
import {
    TestCasesApi,
    Configuration,
    TestCase
} from './api';

const configuration = new Configuration();
const apiInstance = new TestCasesApi(configuration);

let id: number; //A unique integer value identifying this test case. (default to undefined)
let testCase: TestCase; //

const { status, data } = await apiInstance.testCasesUpdate(
    id,
    testCase
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testCase** | **TestCase**|  | |
| **id** | [**number**] | A unique integer value identifying this test case. | defaults to undefined|


### Return type

**TestCase**

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

