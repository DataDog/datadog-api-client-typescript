/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditV2DTODataAttributes } from "./ExperimentsBanditV2DTODataAttributes";
import { ExperimentsBanditV2DTODataType } from "./ExperimentsBanditV2DTODataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource containing a bandit.
 */
export class ExperimentsBanditV2DTOData {
  /**
   * A bandit's setup, the policy it serves, and its latest refresh.
   */
  "attributes": ExperimentsBanditV2DTODataAttributes;
  /**
   * The bandit ID.
   */
  "id": string;
  /**
   * Bandit resource type.
   */
  "type": ExperimentsBanditV2DTODataType;

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
      type: "ExperimentsBanditV2DTODataAttributes",
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
      type: "ExperimentsBanditV2DTODataType",
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
    return ExperimentsBanditV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
