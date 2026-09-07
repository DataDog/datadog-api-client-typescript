/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemJourneyCreateAttributes } from "./DemJourneyCreateAttributes";
import { DemJourneyType } from "./DemJourneyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a DEM journey create or update request.
 */
export class DemJourneyCreateData {
  /**
   * Attributes for creating or updating a DEM journey.
   */
  "attributes": DemJourneyCreateAttributes;
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
      type: "DemJourneyCreateAttributes",
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
    return DemJourneyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
