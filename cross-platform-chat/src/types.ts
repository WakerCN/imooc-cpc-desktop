/*
 * @Author       : 魏威
 * @Date         : 2025-07-11 21:24
 * @LastEditTime : 2025-07-15 17:08
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

export type MessageType = "answer" | "question";
export type MessageStatus = "loading" | "streaming" | "finished";

export interface MessageProps {
  id: string;
  conversationId: string;
  content: string;
  type: MessageType;
  status: MessageStatus;
  createdAt: string;
  updatedAt: string;
}
