/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GetInvestigationResponseDataAttributes } from "./GetInvestigationResponseDataAttributes";
import { InvestigationType } from "./InvestigationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for the get investigation response.
 */
export class GetInvestigationResponseData {
  /**
   * Attributes of the investigation.
   */
  "attributes": GetInvestigationResponseDataAttributes;
  /**
   * The unique identifier of the investigation.
   */
  "id": string;
  /**
   * The resource type for investigations.
   */
  "type": InvestigationType;

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
    attributes: {
      baseName: "attributes",
      type: "GetInvestigationResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "InvestigationType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GetInvestigationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
