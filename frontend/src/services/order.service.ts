import api from './api'

interface OrderItem {
  productId: number
  quantity: number
}

interface CreateOrderPayload {
  items: OrderItem[]
}

interface CreateOrderResponse {
  orderId: number
}

export const createOrder = async (payload: CreateOrderPayload): Promise<CreateOrderResponse> => {
  const response = await api.post<CreateOrderResponse>('/orders', payload)
  return response.data
}
