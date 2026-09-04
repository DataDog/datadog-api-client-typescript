/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemJourneyResponseAttributes } from "./DemJourneyResponseAttributes";
import { DemJourneyType } from "./DemJourneyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object in a DEM journey response.
 */
export class DemJourneyResponseData {
  /**
   * Attributes returned in a DEM journey response.
   */
  "attributes": DemJourneyResponseAttributes;
  /**
   * The unique identifier of the DEM journey.
   */
  "id": string;
  /**
   * The type identifier for DEM journeys.
   */
  "type": DemJourneyType;

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
      type: "DemJourneyResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DemJourneyType",
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
    return DemJourneyResponseData.attributeTypeMap;
  }

  public constructor() {}
}
