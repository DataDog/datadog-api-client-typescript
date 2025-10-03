import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { BulkDeleteAppsDatastoreItemsRequest } from "./BulkDeleteAppsDatastoreItemsRequest";
import { BulkDeleteAppsDatastoreItemsRequestData } from "./BulkDeleteAppsDatastoreItemsRequestData";
import { BulkDeleteAppsDatastoreItemsRequestDataAttributes } from "./BulkDeleteAppsDatastoreItemsRequestDataAttributes";
import { BulkPutAppsDatastoreItemsRequest } from "./BulkPutAppsDatastoreItemsRequest";
import { BulkPutAppsDatastoreItemsRequestData } from "./BulkPutAppsDatastoreItemsRequestData";
import { BulkPutAppsDatastoreItemsRequestDataAttributes } from "./BulkPutAppsDatastoreItemsRequestDataAttributes";
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
import { DeleteAppsDatastoreItemResponseArray } from "./DeleteAppsDatastoreItemResponseArray";
import { DeleteAppsDatastoreItemResponseData } from "./DeleteAppsDatastoreItemResponseData";
import { ItemApiPayload } from "./ItemApiPayload";
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
import { PutAppsDatastoreItemResponseArray } from "./PutAppsDatastoreItemResponseArray";
import { PutAppsDatastoreItemResponseData } from "./PutAppsDatastoreItemResponseData";
import { UpdateAppsDatastoreItemRequest } from "./UpdateAppsDatastoreItemRequest";
import { UpdateAppsDatastoreItemRequestData } from "./UpdateAppsDatastoreItemRequestData";
import { UpdateAppsDatastoreItemRequestDataAttributes } from "./UpdateAppsDatastoreItemRequestDataAttributes";
import { UpdateAppsDatastoreItemRequestDataAttributesItemChanges } from "./UpdateAppsDatastoreItemRequestDataAttributesItemChanges";
import { UpdateAppsDatastoreRequest } from "./UpdateAppsDatastoreRequest";
import { UpdateAppsDatastoreRequestData } from "./UpdateAppsDatastoreRequestData";
import { UpdateAppsDatastoreRequestDataAttributes } from "./UpdateAppsDatastoreRequestDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    BulkDeleteAppsDatastoreItemsRequestDataType: ["items"],
    CreateAppsDatastoreRequestDataAttributesOrgAccess: [
      "contributor",
      "viewer",
      "manager",
    ],
    DatastoreDataType: ["datastores"],
    DatastoreItemConflictMode: ["fail_on_conflict", "overwrite_on_conflict"],
    DatastoreItemsDataType: ["items"],
    DatastorePrimaryKeyGenerationStrategy: ["none", "uuid"],
    UpdateAppsDatastoreItemRequestDataType: ["items"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    BulkDeleteAppsDatastoreItemsRequest: BulkDeleteAppsDatastoreItemsRequest,
    BulkDeleteAppsDatastoreItemsRequestData:
      BulkDeleteAppsDatastoreItemsRequestData,
    BulkDeleteAppsDatastoreItemsRequestDataAttributes:
      BulkDeleteAppsDatastoreItemsRequestDataAttributes,
    BulkPutAppsDatastoreItemsRequest: BulkPutAppsDatastoreItemsRequest,
    BulkPutAppsDatastoreItemsRequestData: BulkPutAppsDatastoreItemsRequestData,
    BulkPutAppsDatastoreItemsRequestDataAttributes:
      BulkPutAppsDatastoreItemsRequestDataAttributes,
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
    DeleteAppsDatastoreItemResponseArray: DeleteAppsDatastoreItemResponseArray,
    DeleteAppsDatastoreItemResponseData: DeleteAppsDatastoreItemResponseData,
    ItemApiPayload: ItemApiPayload,
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
    PutAppsDatastoreItemResponseArray: PutAppsDatastoreItemResponseArray,
    PutAppsDatastoreItemResponseData: PutAppsDatastoreItemResponseData,
    UpdateAppsDatastoreItemRequest: UpdateAppsDatastoreItemRequest,
    UpdateAppsDatastoreItemRequestData: UpdateAppsDatastoreItemRequestData,
    UpdateAppsDatastoreItemRequestDataAttributes:
      UpdateAppsDatastoreItemRequestDataAttributes,
    UpdateAppsDatastoreItemRequestDataAttributesItemChanges:
      UpdateAppsDatastoreItemRequestDataAttributesItemChanges,
    UpdateAppsDatastoreRequest: UpdateAppsDatastoreRequest,
    UpdateAppsDatastoreRequestData: UpdateAppsDatastoreRequestData,
    UpdateAppsDatastoreRequestDataAttributes:
      UpdateAppsDatastoreRequestDataAttributes,
  },
};
