/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsAnalysisPlanV2MutationResponseDataAttributes } from "./ExperimentsAnalysisPlanV2MutationResponseDataAttributes";
import { ExperimentsAnalysisPlanWriteV2RequestDataType } from "./ExperimentsAnalysisPlanWriteV2RequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Analysis plan resource with its identifier and settings.
 */
export class ExperimentsAnalysisPlanV2DTOData {
  /**
   * Statistical settings and duration targets in the saved analysis plan.
   */
  "attributes"?: ExperimentsAnalysisPlanV2MutationResponseDataAttributes;
  /**
   * Identifier of the experiment whose analysis plan is returned.
   */
  "id": string;
  /**
   * Analysis plans resource type.
   */
  "type": ExperimentsAnalysisPlanWriteV2RequestDataType;

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
      type: "ExperimentsAnalysisPlanV2MutationResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsAnalysisPlanWriteV2RequestDataType",
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
    return ExperimentsAnalysisPlanV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
