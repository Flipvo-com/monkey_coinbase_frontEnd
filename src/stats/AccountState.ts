import { createGlobalState } from "@vueuse/core";
import { ref, type Ref } from "vue";

export const AccountState = createGlobalState(() => {
  const accountOrderList: Ref<AccountOrderModel[]> = ref([]);
  const accountInfo: Ref<AccountInfo> = ref({} as AccountInfo);
  const renderAccountOrderList = (data: any) => {
    accountOrderList.value = data?.accountOrders ?? [];
  };
    const renderAccountInfo = (data: any) => {
    accountInfo.value = data?.accountInfo ?? {};
    }
  
  
  return {
    accountOrderList,
    accountInfo,
    renderAccountOrderList,
    renderAccountInfo,
  };
});

export interface AccountInfo {
  uuid: string;
  name: string;
  currency: string;
  available_balance: {
    value: string;
    currency: string;
  };
  default: boolean;
  active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  type: string;
  ready: boolean;
  hold: {
    value: string;
    currency: string;
  };
  retail_portfolio_id: string;
}

export interface AccountOrderModel {
  success?: boolean;
  success_response: {
    order_id: string;
    product_id: string;
    side: string;
    client_order_id: string;
    attached_order_id: string;
  };
  order_configuration: {
    limit_limit_gtc: {
      base_size: string;
      limit_price: string;
      post_only: boolean;
    };
  };
  fillCount: number;
  oldOrderId: string;
  order_id: string;
  product_id: string;
  user_id: string;
  side: string;
  client_order_id: string;
  status: string;
  time_in_force: string;
  created_time: string;
  completion_percentage: string;
  filled_size: string;
  average_filled_price: string;
  fee: string;
  number_of_fills: string;
  filled_value: string;
  pending_cancel: boolean;
  size_in_quote: boolean;
  total_fees: string;
  size_inclusive_of_fees: boolean;
  total_value_after_fees: string;
  trigger_status: string;
  order_type: string;
  reject_reason: string;
  settled: boolean;
  product_type: string;
  reject_message: string;
  cancel_message: string;
  order_placement_source: string;
  outstanding_hold_amount: string;
  is_liquidation: boolean;
  last_fill_time: string | null;
  edit_history: Array<{
    price: string;
    size: string;
    replace_accept_timestamp: string;
  }>;
  leverage: string;
  margin_type: string;
  retail_portfolio_id: string;
  originating_order_id: string;
  attached_order_id: string;
  attached_order_configuration:
    | null
    | {
        // Define properties here if attached_order_configuration is not null
      };
}
