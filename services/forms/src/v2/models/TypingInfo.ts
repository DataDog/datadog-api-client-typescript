import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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
import { FormResponse } from "./FormResponse";
import { FormUiDefinition } from "./FormUiDefinition";
import { FormUiDefinitionUiTheme } from "./FormUiDefinitionUiTheme";
import { FormVersionAttributes } from "./FormVersionAttributes";
import { FormsResponse } from "./FormsResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FormDataDefinitionType: ["object"],
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
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
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
    FormResponse: FormResponse,
    FormUiDefinition: FormUiDefinition,
    FormUiDefinitionUiTheme: FormUiDefinitionUiTheme,
    FormVersionAttributes: FormVersionAttributes,
    FormsResponse: FormsResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
