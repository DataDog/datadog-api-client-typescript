import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CloneFormData } from "./CloneFormData";
import { CloneFormDataAttributes } from "./CloneFormDataAttributes";
import { CloneFormRequest } from "./CloneFormRequest";
import { CreateFormData } from "./CreateFormData";
import { CreateFormDataAttributes } from "./CreateFormDataAttributes";
import { CreateFormRequest } from "./CreateFormRequest";
import { DeleteFormData } from "./DeleteFormData";
import { DeleteFormResponse } from "./DeleteFormResponse";
import { FormData } from "./FormData";
import { FormDataAttributes } from "./FormDataAttributes";
import { FormDataDefinition } from "./FormDataDefinition";
import { FormDatastoreConfigAttributes } from "./FormDatastoreConfigAttributes";
import { FormPublicationAttributes } from "./FormPublicationAttributes";
import { FormPublicationData } from "./FormPublicationData";
import { FormPublicationResponse } from "./FormPublicationResponse";
import { FormResponse } from "./FormResponse";
import { FormUiDefinition } from "./FormUiDefinition";
import { FormUiDefinitionUiTheme } from "./FormUiDefinitionUiTheme";
import { FormUpdateAttributes } from "./FormUpdateAttributes";
import { FormVersionAttributes } from "./FormVersionAttributes";
import { FormVersionData } from "./FormVersionData";
import { FormVersionResponse } from "./FormVersionResponse";
import { FormsResponse } from "./FormsResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { PublishFormData } from "./PublishFormData";
import { PublishFormDataAttributes } from "./PublishFormDataAttributes";
import { PublishFormRequest } from "./PublishFormRequest";
import { UpdateFormData } from "./UpdateFormData";
import { UpdateFormDataAttributes } from "./UpdateFormDataAttributes";
import { UpdateFormRequest } from "./UpdateFormRequest";
import { UpsertAndPublishFormVersionData } from "./UpsertAndPublishFormVersionData";
import { UpsertAndPublishFormVersionDataAttributes } from "./UpsertAndPublishFormVersionDataAttributes";
import { UpsertAndPublishFormVersionRequest } from "./UpsertAndPublishFormVersionRequest";
import { UpsertAndPublishFormVersionUpsertParams } from "./UpsertAndPublishFormVersionUpsertParams";
import { UpsertFormVersionData } from "./UpsertFormVersionData";
import { UpsertFormVersionDataAttributes } from "./UpsertFormVersionDataAttributes";
import { UpsertFormVersionRequest } from "./UpsertFormVersionRequest";
import { UpsertFormVersionUpsertParams } from "./UpsertFormVersionUpsertParams";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FormDataDefinitionType: ["object"],
    FormPublicationType: ["form_publications"],
    FormType: ["forms"],
    FormUiDefinitionUiThemePrimaryColor: [
      "gray",
      "red",
      "orange",
      "yellow",
      "green",
      "light-blue",
      "dark-blue",
      "magenta",
      "indigo",
    ],
    FormVersionState: ["draft", "frozen"],
    FormVersionType: ["form_versions"],
    LatestVersionMatchPolicy: ["none", "if_etag_match"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CloneFormData: CloneFormData,
    CloneFormDataAttributes: CloneFormDataAttributes,
    CloneFormRequest: CloneFormRequest,
    CreateFormData: CreateFormData,
    CreateFormDataAttributes: CreateFormDataAttributes,
    CreateFormRequest: CreateFormRequest,
    DeleteFormData: DeleteFormData,
    DeleteFormResponse: DeleteFormResponse,
    FormData: FormData,
    FormDataAttributes: FormDataAttributes,
    FormDataDefinition: FormDataDefinition,
    FormDatastoreConfigAttributes: FormDatastoreConfigAttributes,
    FormPublicationAttributes: FormPublicationAttributes,
    FormPublicationData: FormPublicationData,
    FormPublicationResponse: FormPublicationResponse,
    FormResponse: FormResponse,
    FormUiDefinition: FormUiDefinition,
    FormUiDefinitionUiTheme: FormUiDefinitionUiTheme,
    FormUpdateAttributes: FormUpdateAttributes,
    FormVersionAttributes: FormVersionAttributes,
    FormVersionData: FormVersionData,
    FormVersionResponse: FormVersionResponse,
    FormsResponse: FormsResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    PublishFormData: PublishFormData,
    PublishFormDataAttributes: PublishFormDataAttributes,
    PublishFormRequest: PublishFormRequest,
    UpdateFormData: UpdateFormData,
    UpdateFormDataAttributes: UpdateFormDataAttributes,
    UpdateFormRequest: UpdateFormRequest,
    UpsertAndPublishFormVersionData: UpsertAndPublishFormVersionData,
    UpsertAndPublishFormVersionDataAttributes:
      UpsertAndPublishFormVersionDataAttributes,
    UpsertAndPublishFormVersionRequest: UpsertAndPublishFormVersionRequest,
    UpsertAndPublishFormVersionUpsertParams:
      UpsertAndPublishFormVersionUpsertParams,
    UpsertFormVersionData: UpsertFormVersionData,
    UpsertFormVersionDataAttributes: UpsertFormVersionDataAttributes,
    UpsertFormVersionRequest: UpsertFormVersionRequest,
    UpsertFormVersionUpsertParams: UpsertFormVersionUpsertParams,
  },
};
