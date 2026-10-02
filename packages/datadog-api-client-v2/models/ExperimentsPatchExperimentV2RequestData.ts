/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPatchExperimentV2RequestDataAttributes } from "./ExperimentsPatchExperimentV2RequestDataAttributes";
import { ExperimentsPatchExperimentV2ResponseDataType } from "./ExperimentsPatchExperimentV2ResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource containing the experiment identity and fields.
 */
export class ExperimentsPatchExperimentV2RequestData {
  /**
   * Fields supplied to update the experiment.
   */
  "attributes"?: ExperimentsPatchExperimentV2RequestDataAttributes;
  /**
   * ID of the experiment.
   */
  "id"?: string;
  /**
   * Experiments resource type.
   */
  "type": ExperimentsPatchExperimentV2ResponseDataType;

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
      type: "ExperimentsPatchExperimentV2RequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsPatchExperimentV2ResponseDataType",
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
    return ExperimentsPatchExperimentV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
