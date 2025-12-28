# TestRunsApi

All URIs are relative to *http://localhost:8000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**testRunsCreate**](#testrunscreate) | **POST** /api/v1/test-runs/ | |
|[**testRunsDestroy**](#testrunsdestroy) | **DELETE** /api/v1/test-runs/{id}/ | |
|[**testRunsList**](#testrunslist) | **GET** /api/v1/test-runs/ | |
|[**testRunsPartialUpdate**](#testrunspartialupdate) | **PATCH** /api/v1/test-runs/{id}/ | |
|[**testRunsRetrieve**](#testrunsretrieve) | **GET** /api/v1/test-runs/{id}/ | |
|[**testRunsUpdate**](#testrunsupdate) | **PUT** /api/v1/test-runs/{id}/ | |

# **testRunsCreate**
> TestRun testRunsCreate(testRun)

Manage test run lifecycle.

### Example

```typescript
import {
    TestRunsApi,
    Configuration,
    TestRun
} from './api';

const configuration = new Configuration();
const apiInstance = new TestRunsApi(configuration);

let testRun: TestRun; //

const { status, data } = await apiInstance.testRunsCreate(
    testRun
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testRun** | **TestRun**|  | |


### Return type

**TestRun**

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

# **testRunsDestroy**
> testRunsDestroy()

Manage test run lifecycle.

### Example

```typescript
import {
    TestRunsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestRunsApi(configuration);

let id: number; //A unique integer value identifying this test run. (default to undefined)

const { status, data } = await apiInstance.testRunsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this test run. | defaults to undefined|


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

# **testRunsList**
> PaginatedTestRunList testRunsList()

Manage test run lifecycle.

### Example

```typescript
import {
    TestRunsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestRunsApi(configuration);

let board: number; // (optional) (default to undefined)
let ordering: string; //Which field to use when ordering the results. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)
let search: string; //A search term. (optional) (default to undefined)
let status: string; // (optional) (default to undefined)
let testCase: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.testRunsList(
    board,
    ordering,
    page,
    search,
    status,
    testCase
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **board** | [**number**] |  | (optional) defaults to undefined|
| **ordering** | [**string**] | Which field to use when ordering the results. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|
| **search** | [**string**] | A search term. | (optional) defaults to undefined|
| **status** | [**string**] |  | (optional) defaults to undefined|
| **testCase** | [**number**] |  | (optional) defaults to undefined|


### Return type

**PaginatedTestRunList**

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

# **testRunsPartialUpdate**
> TestRun testRunsPartialUpdate()

Manage test run lifecycle.

### Example

```typescript
import {
    TestRunsApi,
    Configuration,
    PatchedTestRun
} from './api';

const configuration = new Configuration();
const apiInstance = new TestRunsApi(configuration);

let id: number; //A unique integer value identifying this test run. (default to undefined)
let patchedTestRun: PatchedTestRun; // (optional)

const { status, data } = await apiInstance.testRunsPartialUpdate(
    id,
    patchedTestRun
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedTestRun** | **PatchedTestRun**|  | |
| **id** | [**number**] | A unique integer value identifying this test run. | defaults to undefined|


### Return type

**TestRun**

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

# **testRunsRetrieve**
> TestRun testRunsRetrieve()

Manage test run lifecycle.

### Example

```typescript
import {
    TestRunsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new TestRunsApi(configuration);

let id: number; //A unique integer value identifying this test run. (default to undefined)

const { status, data } = await apiInstance.testRunsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this test run. | defaults to undefined|


### Return type

**TestRun**

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

# **testRunsUpdate**
> TestRun testRunsUpdate(testRun)

Manage test run lifecycle.

### Example

```typescript
import {
    TestRunsApi,
    Configuration,
    TestRun
} from './api';

const configuration = new Configuration();
const apiInstance = new TestRunsApi(configuration);

let id: number; //A unique integer value identifying this test run. (default to undefined)
let testRun: TestRun; //

const { status, data } = await apiInstance.testRunsUpdate(
    id,
    testRun
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **testRun** | **TestRun**|  | |
| **id** | [**number**] | A unique integer value identifying this test run. | defaults to undefined|


### Return type

**TestRun**

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

