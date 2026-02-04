import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { FormCreateRequest } from "./FormCreateRequest";
import { FormDataAttributesRequest } from "./FormDataAttributesRequest";
import { FormDataAttributesResponse } from "./FormDataAttributesResponse";
import { FormDataRequest } from "./FormDataRequest";
import { FormDataResponse } from "./FormDataResponse";
import { FormDatastoreConfig } from "./FormDatastoreConfig";
import { FormPublication } from "./FormPublication";
import { FormPublicationAttributes } from "./FormPublicationAttributes";
import { FormPublicationDataRequest } from "./FormPublicationDataRequest";
import { FormPublicationDataResponse } from "./FormPublicationDataResponse";
import { FormPublicationRequest } from "./FormPublicationRequest";
import { FormPublicationResponse } from "./FormPublicationResponse";
import { FormResponse } from "./FormResponse";
import { FormSubmissionAttributes } from "./FormSubmissionAttributes";
import { FormSubmissionDataRequest } from "./FormSubmissionDataRequest";
import { FormSubmissionDataResponse } from "./FormSubmissionDataResponse";
import { FormSubmissionRequest } from "./FormSubmissionRequest";
import { FormSubmissionResponse } from "./FormSubmissionResponse";
import { FormUpdateAttributes } from "./FormUpdateAttributes";
import { FormUpdateAttributesFormUpdate } from "./FormUpdateAttributesFormUpdate";
import { FormUpdateDataRequest } from "./FormUpdateDataRequest";
import { FormUpdateRequest } from "./FormUpdateRequest";
import { FormVersion } from "./FormVersion";
import { FormVersionAttributes } from "./FormVersionAttributes";
import { FormVersionDataAttributesResponse } from "./FormVersionDataAttributesResponse";
import { FormVersionDataRequest } from "./FormVersionDataRequest";
import { FormVersionDataResponse } from "./FormVersionDataResponse";
import { FormVersionRequest } from "./FormVersionRequest";
import { FormVersionResponse } from "./FormVersionResponse";
import { FormVersionUpsertParams } from "./FormVersionUpsertParams";
import { FormsListResponse } from "./FormsListResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FormPublicationType: ["form_publications"],
    FormSubmissionType: ["form_submissions"],
    FormType: ["forms"],
    FormVersionState: ["draft", "frozen"],
    FormVersionType: ["form_versions"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    FormCreateRequest: FormCreateRequest,
    FormDataAttributesRequest: FormDataAttributesRequest,
    FormDataAttributesResponse: FormDataAttributesResponse,
    FormDataRequest: FormDataRequest,
    FormDataResponse: FormDataResponse,
    FormDatastoreConfig: FormDatastoreConfig,
    FormPublication: FormPublication,
    FormPublicationAttributes: FormPublicationAttributes,
    FormPublicationDataRequest: FormPublicationDataRequest,
    FormPublicationDataResponse: FormPublicationDataResponse,
    FormPublicationRequest: FormPublicationRequest,
    FormPublicationResponse: FormPublicationResponse,
    FormResponse: FormResponse,
    FormSubmissionAttributes: FormSubmissionAttributes,
    FormSubmissionDataRequest: FormSubmissionDataRequest,
    FormSubmissionDataResponse: FormSubmissionDataResponse,
    FormSubmissionRequest: FormSubmissionRequest,
    FormSubmissionResponse: FormSubmissionResponse,
    FormUpdateAttributes: FormUpdateAttributes,
    FormUpdateAttributesFormUpdate: FormUpdateAttributesFormUpdate,
    FormUpdateDataRequest: FormUpdateDataRequest,
    FormUpdateRequest: FormUpdateRequest,
    FormVersion: FormVersion,
    FormVersionAttributes: FormVersionAttributes,
    FormVersionDataAttributesResponse: FormVersionDataAttributesResponse,
    FormVersionDataRequest: FormVersionDataRequest,
    FormVersionDataResponse: FormVersionDataResponse,
    FormVersionRequest: FormVersionRequest,
    FormVersionResponse: FormVersionResponse,
    FormVersionUpsertParams: FormVersionUpsertParams,
    FormsListResponse: FormsListResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
