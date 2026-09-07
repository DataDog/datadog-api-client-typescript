/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemBatchGetJourneysAttributes } from "./DemBatchGetJourneysAttributes";
import { DemBatchGetJourneysRequestType } from "./DemBatchGetJourneysRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a batch get journeys request.
 */
export class DemBatchGetJourneysData {
  /**
   * Attributes for a batch get journeys request.
   */
  "attributes": DemBatchGetJourneysAttributes;
  /**
   * The resource type for a request to retrieve DEM journeys by test suite IDs.
   */
  "type": DemBatchGetJourneysRequestType;

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
      type: "DemBatchGetJourneysAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DemBatchGetJourneysRequestType",
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
    return DemBatchGetJourneysData.attributeTypeMap;
  }

  public constructor() {}
}
