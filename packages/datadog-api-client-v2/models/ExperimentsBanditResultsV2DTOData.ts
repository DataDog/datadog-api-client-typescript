/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditResultsV2DTODataAttributes } from "./ExperimentsBanditResultsV2DTODataAttributes";
import { ExperimentsBanditResultsV2DTODataType } from "./ExperimentsBanditResultsV2DTODataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource containing a bandit's results.
 */
export class ExperimentsBanditResultsV2DTOData {
  /**
   * What the bandit's refreshes have learned.
   */
  "attributes": ExperimentsBanditResultsV2DTODataAttributes;
  /**
   * The bandit ID.
   */
  "id": string;
  /**
   * Bandit results resource type.
   */
  "type": ExperimentsBanditResultsV2DTODataType;

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
      type: "ExperimentsBanditResultsV2DTODataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsBanditResultsV2DTODataType",
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
    return ExperimentsBanditResultsV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
