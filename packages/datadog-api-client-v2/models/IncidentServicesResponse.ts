/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentServiceIncludedItems } from "./IncidentServiceIncludedItems";
import { IncidentServiceResponseData } from "./IncidentServiceResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a list of incident service payloads.
 */
export class IncidentServicesResponse {
  /**
   * An array of incident services.
   */
  "data": Array<IncidentServiceResponseData>;
  /**
   * Included related resources which the user requested.
   */
  "included"?: Array<IncidentServiceIncludedItems>;
  /**
   * The metadata object containing pagination metadata.
   */
  "meta"?: IncidentResponseMeta;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "Array<IncidentServiceResponseData>",
      required: true,
    },
    included: {
      type: "Array<IncidentServiceIncludedItems>",
    },
    meta: {
      type: "IncidentResponseMeta",
    },
  };
}
