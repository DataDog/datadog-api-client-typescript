/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentServiceIncludedItems } from "./IncidentServiceIncludedItems";
import { IncidentServiceResponseData } from "./IncidentServiceResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with an incident service payload.
 */
export class IncidentServiceResponse {
  /**
   * Incident Service data from responses.
   */
  "data": IncidentServiceResponseData;
  /**
   * Included objects from relationships.
   */
  "included"?: Array<IncidentServiceIncludedItems>;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "IncidentServiceResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentServiceIncludedItems>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentServiceResponse.attributeTypeMap;
  }

  public constructor() {}
}
