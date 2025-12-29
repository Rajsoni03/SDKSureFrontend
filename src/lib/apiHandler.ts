import toast from 'react-hot-toast'
import type { AxiosError } from 'axios'
import { useLoaderStore } from '@/store/loaderStore'

interface ApiOptions<T> {
  successMessage?: string
  errorMessage?: string
  onSuccess?: (data: T) => void
  onError?: (err: any) => void
  onFinally?: () => void
}

const getErrorMessage = (err: any, fallback: string) => {
  const axiosErr = err as AxiosError<any>
  const detail =
    axiosErr?.response?.data?.detail ||
    axiosErr?.response?.data?.message ||
    (axiosErr?.response?.data as any)?.error ||
    axiosErr?.message
  return detail || fallback
}

export async function apiCall<T>(
  operation: () => Promise<T>,
  options: ApiOptions<T> = {},
): Promise<T> {
  const {
    successMessage = '',
    errorMessage = 'Something went wrong!',
    onSuccess,
    onError,
    onFinally,
  } = options

  const loader = useLoaderStore.getState()
  loader.show()

  try {
    const res = await operation()
    if (successMessage) toast.success(successMessage)
    onSuccess?.(res)
    return res
  } catch (err) {
    toast.error(getErrorMessage(err, errorMessage))
    onError?.(err)
    throw err
  } finally {
    loader.hide()
    onFinally?.()
  }
}
