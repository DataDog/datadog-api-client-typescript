import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CustomDestinationCreateRequest } from "./CustomDestinationCreateRequest";
import { CustomDestinationCreateRequestAttributes } from "./CustomDestinationCreateRequestAttributes";
import { CustomDestinationCreateRequestDefinition } from "./CustomDestinationCreateRequestDefinition";
import { CustomDestinationElasticsearchDestinationAuth } from "./CustomDestinationElasticsearchDestinationAuth";
import { CustomDestinationForwardDestinationElasticsearch } from "./CustomDestinationForwardDestinationElasticsearch";
import { CustomDestinationForwardDestinationHttp } from "./CustomDestinationForwardDestinationHttp";
import { CustomDestinationForwardDestinationSplunk } from "./CustomDestinationForwardDestinationSplunk";
import { CustomDestinationHttpDestinationAuthBasic } from "./CustomDestinationHttpDestinationAuthBasic";
import { CustomDestinationHttpDestinationAuthCustomHeader } from "./CustomDestinationHttpDestinationAuthCustomHeader";
import { CustomDestinationResponse } from "./CustomDestinationResponse";
import { CustomDestinationResponseAttributes } from "./CustomDestinationResponseAttributes";
import { CustomDestinationResponseDefinition } from "./CustomDestinationResponseDefinition";
import { CustomDestinationResponseForwardDestinationElasticsearch } from "./CustomDestinationResponseForwardDestinationElasticsearch";
import { CustomDestinationResponseForwardDestinationHttp } from "./CustomDestinationResponseForwardDestinationHttp";
import { CustomDestinationResponseForwardDestinationSplunk } from "./CustomDestinationResponseForwardDestinationSplunk";
import { CustomDestinationResponseHttpDestinationAuthBasic } from "./CustomDestinationResponseHttpDestinationAuthBasic";
import { CustomDestinationResponseHttpDestinationAuthCustomHeader } from "./CustomDestinationResponseHttpDestinationAuthCustomHeader";
import { CustomDestinationUpdateRequest } from "./CustomDestinationUpdateRequest";
import { CustomDestinationUpdateRequestAttributes } from "./CustomDestinationUpdateRequestAttributes";
import { CustomDestinationUpdateRequestDefinition } from "./CustomDestinationUpdateRequestDefinition";
import { CustomDestinationsResponse } from "./CustomDestinationsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CustomDestinationAttributeTagsRestrictionListType: [
      "ALLOW_LIST",
      "BLOCK_LIST",
    ],
    CustomDestinationForwardDestinationElasticsearchType: ["elasticsearch"],
    CustomDestinationForwardDestinationHttpType: ["http"],
    CustomDestinationForwardDestinationSplunkType: ["splunk_hec"],
    CustomDestinationHttpDestinationAuthBasicType: ["basic"],
    CustomDestinationHttpDestinationAuthCustomHeaderType: ["custom_header"],
    CustomDestinationResponseForwardDestinationElasticsearchType: [
      "elasticsearch",
    ],
    CustomDestinationResponseForwardDestinationHttpType: ["http"],
    CustomDestinationResponseForwardDestinationSplunkType: ["splunk_hec"],
    CustomDestinationResponseHttpDestinationAuthBasicType: ["basic"],
    CustomDestinationResponseHttpDestinationAuthCustomHeaderType: [
      "custom_header",
    ],
    CustomDestinationType: ["custom_destination"],
  },
  oneOfMap: {
    CustomDestinationForwardDestination: [
      "CustomDestinationForwardDestinationHttp",
      "CustomDestinationForwardDestinationSplunk",
      "CustomDestinationForwardDestinationElasticsearch",
    ],
    CustomDestinationHttpDestinationAuth: [
      "CustomDestinationHttpDestinationAuthBasic",
      "CustomDestinationHttpDestinationAuthCustomHeader",
    ],
    CustomDestinationResponseForwardDestination: [
      "CustomDestinationResponseForwardDestinationHttp",
      "CustomDestinationResponseForwardDestinationSplunk",
      "CustomDestinationResponseForwardDestinationElasticsearch",
    ],
    CustomDestinationResponseHttpDestinationAuth: [
      "CustomDestinationResponseHttpDestinationAuthBasic",
      "CustomDestinationResponseHttpDestinationAuthCustomHeader",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CustomDestinationCreateRequest: CustomDestinationCreateRequest,
    CustomDestinationCreateRequestAttributes:
      CustomDestinationCreateRequestAttributes,
    CustomDestinationCreateRequestDefinition:
      CustomDestinationCreateRequestDefinition,
    CustomDestinationElasticsearchDestinationAuth:
      CustomDestinationElasticsearchDestinationAuth,
    CustomDestinationForwardDestinationElasticsearch:
      CustomDestinationForwardDestinationElasticsearch,
    CustomDestinationForwardDestinationHttp:
      CustomDestinationForwardDestinationHttp,
    CustomDestinationForwardDestinationSplunk:
      CustomDestinationForwardDestinationSplunk,
    CustomDestinationHttpDestinationAuthBasic:
      CustomDestinationHttpDestinationAuthBasic,
    CustomDestinationHttpDestinationAuthCustomHeader:
      CustomDestinationHttpDestinationAuthCustomHeader,
    CustomDestinationResponse: CustomDestinationResponse,
    CustomDestinationResponseAttributes: CustomDestinationResponseAttributes,
    CustomDestinationResponseDefinition: CustomDestinationResponseDefinition,
    CustomDestinationResponseForwardDestinationElasticsearch:
      CustomDestinationResponseForwardDestinationElasticsearch,
    CustomDestinationResponseForwardDestinationHttp:
      CustomDestinationResponseForwardDestinationHttp,
    CustomDestinationResponseForwardDestinationSplunk:
      CustomDestinationResponseForwardDestinationSplunk,
    CustomDestinationResponseHttpDestinationAuthBasic:
      CustomDestinationResponseHttpDestinationAuthBasic,
    CustomDestinationResponseHttpDestinationAuthCustomHeader:
      CustomDestinationResponseHttpDestinationAuthCustomHeader,
    CustomDestinationUpdateRequest: CustomDestinationUpdateRequest,
    CustomDestinationUpdateRequestAttributes:
      CustomDestinationUpdateRequestAttributes,
    CustomDestinationUpdateRequestDefinition:
      CustomDestinationUpdateRequestDefinition,
    CustomDestinationsResponse: CustomDestinationsResponse,
  },
};
