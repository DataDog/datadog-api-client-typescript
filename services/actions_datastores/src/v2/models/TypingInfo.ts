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
import { DeleteAppsDatastoreResponse } from "./DeleteAppsDatastoreResponse";
import { DeleteAppsDatastoreResponseData } from "./DeleteAppsDatastoreResponseData";
import { Error } from "./Error";
import { ErrorErrorsItems } from "./ErrorErrorsItems";
import { ErrorErrorsItemsLinks } from "./ErrorErrorsItemsLinks";
import { ErrorErrorsItemsSource } from "./ErrorErrorsItemsSource";
import { ItemApiPayload } from "./ItemApiPayload";
import { ItemApiPayloadArray } from "./ItemApiPayloadArray";
import { ItemApiPayloadData } from "./ItemApiPayloadData";
import { ItemApiPayloadDataAttributes } from "./ItemApiPayloadDataAttributes";
import { ItemApiPayloadMeta } from "./ItemApiPayloadMeta";
import { ItemApiPayloadMetaPage } from "./ItemApiPayloadMetaPage";
import { ItemApiPayloadMetaSchema } from "./ItemApiPayloadMetaSchema";
import { ItemApiPayloadMetaSchemaField } from "./ItemApiPayloadMetaSchemaField";
import { PutAppsDatastoreItemRequest } from "./PutAppsDatastoreItemRequest";
import { PutAppsDatastoreItemRequestData } from "./PutAppsDatastoreItemRequestData";
import { PutAppsDatastoreItemRequestDataAttributes } from "./PutAppsDatastoreItemRequestDataAttributes";
import { PutAppsDatastoreItemResponse } from "./PutAppsDatastoreItemResponse";
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
    BulkPutAppsDatastoreItemsRequestDataType: ["items"],
    CreateAppsDatastoreFromImportRequestDataType: ["datastores"],
    CreateAppsDatastoreFromImportResponseDataType: ["datastores"],
    CreateAppsDatastoreRequestDataType: ["datastores"],
    CreateAppsDatastoreResponseDataType: ["datastores"],
    DatastoreDataType: ["datastores"],
    DeleteAppsDatastoreItemRequestDataType: ["items"],
    DeleteAppsDatastoreResponseDataType: ["datastores"],
    ItemApiPayloadDataType: ["items"],
    PutAppsDatastoreItemRequestDataType: ["items"],
    PutAppsDatastoreItemResponseDataType: ["items"],
    UpdateAppsDatastoreItemRequestDataType: ["items"],
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
    DeleteAppsDatastoreResponse: DeleteAppsDatastoreResponse,
    DeleteAppsDatastoreResponseData: DeleteAppsDatastoreResponseData,
    Error: Error,
    ErrorErrorsItems: ErrorErrorsItems,
    ErrorErrorsItemsLinks: ErrorErrorsItemsLinks,
    ErrorErrorsItemsSource: ErrorErrorsItemsSource,
    ItemApiPayload: ItemApiPayload,
    ItemApiPayloadArray: ItemApiPayloadArray,
    ItemApiPayloadData: ItemApiPayloadData,
    ItemApiPayloadDataAttributes: ItemApiPayloadDataAttributes,
    ItemApiPayloadMeta: ItemApiPayloadMeta,
    ItemApiPayloadMetaPage: ItemApiPayloadMetaPage,
    ItemApiPayloadMetaSchema: ItemApiPayloadMetaSchema,
    ItemApiPayloadMetaSchemaField: ItemApiPayloadMetaSchemaField,
    PutAppsDatastoreItemRequest: PutAppsDatastoreItemRequest,
    PutAppsDatastoreItemRequestData: PutAppsDatastoreItemRequestData,
    PutAppsDatastoreItemRequestDataAttributes:
      PutAppsDatastoreItemRequestDataAttributes,
    PutAppsDatastoreItemResponse: PutAppsDatastoreItemResponse,
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
