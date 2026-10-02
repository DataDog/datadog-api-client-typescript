/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsExperimentDiagnosticsV2DTODataAttributes } from "./ExperimentsExperimentDiagnosticsV2DTODataAttributes";
import { ExperimentsExperimentDiagnosticsV2DTODataType } from "./ExperimentsExperimentDiagnosticsV2DTODataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Experiment diagnostics resource with its identifier and check results.
 */
export class ExperimentsExperimentDiagnosticsV2DTOData {
  /**
   * Diagnostic check results and their evaluation state.
   */
  "attributes"?: ExperimentsExperimentDiagnosticsV2DTODataAttributes;
  /**
   * Identifier of the experiment whose diagnostics are returned.
   */
  "id": string;
  /**
   * Experiment diagnostics resource type.
   */
  "type": ExperimentsExperimentDiagnosticsV2DTODataType;

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
      type: "ExperimentsExperimentDiagnosticsV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsExperimentDiagnosticsV2DTODataType",
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
    return ExperimentsExperimentDiagnosticsV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
