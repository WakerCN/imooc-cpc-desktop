/*
 * @Author       : 魏威
 * @Date         : 2025-07-11 21:24
 * @LastEditTime : 2025-07-13 10:14
 * @LastEditors  : StarOne
 * @Description  :
 */

export interface ConversationProps {
  id: string;
  title: string;
  selectedModel: string;
  createdAt: string;
  updatedAt: string;
  providerId: number;
}

export interface ProviderProps {
  id: number;
  name: string;
  title?: string;
  desc?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
  models: string[];
}
