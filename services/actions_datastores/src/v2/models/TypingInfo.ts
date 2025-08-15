import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { BulkPutAppsDatastoreItemsRequest } from "./BulkPutAppsDatastoreItemsRequest";
import { BulkPutAppsDatastoreItemsRequestData } from "./BulkPutAppsDatastoreItemsRequestData";
import { BulkPutAppsDatastoreItemsRequestDataAttributes } from "./BulkPutAppsDatastoreItemsRequestDataAttributes";
import { CreateAppsDatastoreFromImportRequest } from "./CreateAppsDatastoreFromImportRequest";
import { CreateAppsDatastoreFromImportRequestData } from "./CreateAppsDatastoreFromImportRequestData";
import { CreateAppsDatastoreFromImportRequestDataAttributes } from "./CreateAppsDatastoreFromImportRequestDataAttributes";
import { CreateAppsDatastoreFromImportResponse } from "./CreateAppsDatastoreFromImportResponse";
import { CreateAppsDatastoreFromImportResponseData } from "./CreateAppsDatastoreFromImportResponseData";
import { CreateAppsDatastoreFromImportResponseDataAttributes } from "./CreateAppsDatastoreFromImportResponseDataAttributes";
import { CreateAppsDatastoreRequest } from "./CreateAppsDatastoreRequest";
import { CreateAppsDatastoreRequestData } from "./CreateAppsDatastoreRequestData";
import { CreateAppsDatastoreRequestDataAttributes } from "./CreateAppsDatastoreRequestDataAttributes";
import { CreateAppsDatastoreResponse } from "./CreateAppsDatastoreResponse";
import { CreateAppsDatastoreResponseData } from "./CreateAppsDatastoreResponseData";
import { Datastore } from "./Datastore";
import { DatastoreArray } from "./DatastoreArray";
import { DatastoreData } from "./DatastoreData";
import { DatastoreDataAttributes } from "./DatastoreDataAttributes";
import { DeleteAppsDatastoreItemRequest } from "./DeleteAppsDatastoreItemRequest";
import { DeleteAppsDatastoreItemRequestData } from "./DeleteAppsDatastoreItemRequestData";
import { DeleteAppsDatastoreItemRequestDataAttributes } from "./DeleteAppsDatastoreItemRequestDataAttributes";
import { DeleteAppsDatastoreItemResponse } from "./DeleteAppsDatastoreItemResponse";
import { DeleteAppsDatastoreItemResponseData } from "./DeleteAppsDatastoreItemResponseData";
import { ItemApiPayloadArray } from "./ItemApiPayloadArray";
import { ItemApiPayloadData } from "./ItemApiPayloadData";
import { ItemApiPayloadDataAttributes } from "./ItemApiPayloadDataAttributes";
import { ItemApiPayloadMeta } from "./ItemApiPayloadMeta";
import { ItemApiPayloadMetaPage } from "./ItemApiPayloadMetaPage";
import { ItemApiPayloadMetaSchema } from "./ItemApiPayloadMetaSchema";
import { ItemApiPayloadMetaSchemaField } from "./ItemApiPayloadMetaSchemaField";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { PutAppsDatastoreItemRequest } from "./PutAppsDatastoreItemRequest";
import { PutAppsDatastoreItemRequestData } from "./PutAppsDatastoreItemRequestData";
import { PutAppsDatastoreItemRequestDataAttributes } from "./PutAppsDatastoreItemRequestDataAttributes";
import { PutAppsDatastoreItemResponse } from "./PutAppsDatastoreItemResponse";
import { PutAppsDatastoreItemResponseArray } from "./PutAppsDatastoreItemResponseArray";
import { PutAppsDatastoreItemResponseData } from "./PutAppsDatastoreItemResponseData";
import { UpdateAppsDatastoreRequest } from "./UpdateAppsDatastoreRequest";
import { UpdateAppsDatastoreRequestData } from "./UpdateAppsDatastoreRequestData";
import { UpdateAppsDatastoreRequestDataAttributes } from "./UpdateAppsDatastoreRequestDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    BulkPutAppsDatastoreItemsRequestDataType: ["items"],
    CreateAppsDatastoreFromImportRequestDataAttributesPrimaryKeyGenerationStrategy:
      ["none", "uuid"],
    CreateAppsDatastoreFromImportRequestDataType: ["datastores"],
    CreateAppsDatastoreFromImportResponseDataType: ["datastores"],
    CreateAppsDatastoreRequestDataType: ["datastores"],
    CreateAppsDatastoreResponseDataType: ["datastores"],
    DatastoreDataAttributesPrimaryKeyGenerationStrategy: ["none", "uuid"],
    DatastoreDataType: ["datastores"],
    DeleteAppsDatastoreItemRequestDataType: ["items"],
    DeleteAppsDatastoreItemResponseDataType: ["items"],
    ItemApiPayloadDataType: ["items"],
    PutAppsDatastoreItemRequestDataType: ["items"],
    PutAppsDatastoreItemResponseDataType: ["items"],
    UpdateAppsDatastoreRequestDataType: ["datastores"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    BulkPutAppsDatastoreItemsRequest: BulkPutAppsDatastoreItemsRequest,
    BulkPutAppsDatastoreItemsRequestData: BulkPutAppsDatastoreItemsRequestData,
    BulkPutAppsDatastoreItemsRequestDataAttributes:
      BulkPutAppsDatastoreItemsRequestDataAttributes,
    CreateAppsDatastoreFromImportRequest: CreateAppsDatastoreFromImportRequest,
    CreateAppsDatastoreFromImportRequestData:
      CreateAppsDatastoreFromImportRequestData,
    CreateAppsDatastoreFromImportRequestDataAttributes:
      CreateAppsDatastoreFromImportRequestDataAttributes,
    CreateAppsDatastoreFromImportResponse:
      CreateAppsDatastoreFromImportResponse,
    CreateAppsDatastoreFromImportResponseData:
      CreateAppsDatastoreFromImportResponseData,
    CreateAppsDatastoreFromImportResponseDataAttributes:
      CreateAppsDatastoreFromImportResponseDataAttributes,
    CreateAppsDatastoreRequest: CreateAppsDatastoreRequest,
    CreateAppsDatastoreRequestData: CreateAppsDatastoreRequestData,
    CreateAppsDatastoreRequestDataAttributes:
      CreateAppsDatastoreRequestDataAttributes,
    CreateAppsDatastoreResponse: CreateAppsDatastoreResponse,
    CreateAppsDatastoreResponseData: CreateAppsDatastoreResponseData,
    Datastore: Datastore,
    DatastoreArray: DatastoreArray,
    DatastoreData: DatastoreData,
    DatastoreDataAttributes: DatastoreDataAttributes,
    DeleteAppsDatastoreItemRequest: DeleteAppsDatastoreItemRequest,
    DeleteAppsDatastoreItemRequestData: DeleteAppsDatastoreItemRequestData,
    DeleteAppsDatastoreItemRequestDataAttributes:
      DeleteAppsDatastoreItemRequestDataAttributes,
    DeleteAppsDatastoreItemResponse: DeleteAppsDatastoreItemResponse,
    DeleteAppsDatastoreItemResponseData: DeleteAppsDatastoreItemResponseData,
    ItemApiPayloadArray: ItemApiPayloadArray,
    ItemApiPayloadData: ItemApiPayloadData,
    ItemApiPayloadDataAttributes: ItemApiPayloadDataAttributes,
    ItemApiPayloadMeta: ItemApiPayloadMeta,
    ItemApiPayloadMetaPage: ItemApiPayloadMetaPage,
    ItemApiPayloadMetaSchema: ItemApiPayloadMetaSchema,
    ItemApiPayloadMetaSchemaField: ItemApiPayloadMetaSchemaField,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    PutAppsDatastoreItemRequest: PutAppsDatastoreItemRequest,
    PutAppsDatastoreItemRequestData: PutAppsDatastoreItemRequestData,
    PutAppsDatastoreItemRequestDataAttributes:
      PutAppsDatastoreItemRequestDataAttributes,
    PutAppsDatastoreItemResponse: PutAppsDatastoreItemResponse,
    PutAppsDatastoreItemResponseArray: PutAppsDatastoreItemResponseArray,
    PutAppsDatastoreItemResponseData: PutAppsDatastoreItemResponseData,
    UpdateAppsDatastoreRequest: UpdateAppsDatastoreRequest,
    UpdateAppsDatastoreRequestData: UpdateAppsDatastoreRequestData,
    UpdateAppsDatastoreRequestDataAttributes:
      UpdateAppsDatastoreRequestDataAttributes,
  },
};
