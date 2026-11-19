/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsBanditV2DTODataType } from "./ExperimentsBanditV2DTODataType";
import { ExperimentsPatchBanditV2RequestDataAttributes } from "./ExperimentsPatchBanditV2RequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Bandit resource with the attributes to change.
 */
export class ExperimentsPatchBanditV2RequestData {
  /**
   * The attributes to change. Omitted attributes are unchanged. Which ones can change depends on the bandit's status.
   */
  "attributes": ExperimentsPatchBanditV2RequestDataAttributes;
  /**
   * The bandit ID. When present, it must match the path.
   */
  "id"?: string;
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
      type: "ExperimentsPatchBanditV2RequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return ExperimentsPatchBanditV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
