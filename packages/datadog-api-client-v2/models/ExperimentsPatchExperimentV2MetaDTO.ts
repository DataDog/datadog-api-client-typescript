/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPatchExperimentV2MetaDTOWarningsItems } from "./ExperimentsPatchExperimentV2MetaDTOWarningsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Refresh requirements and warnings returned by an experiment update.
 */
export class ExperimentsPatchExperimentV2MetaDTO {
  /**
   * Whether this edit needs a full or non-full pipeline run. This operation does not start the run. A later false value does not clear a refresh required by an earlier edit.
   */
  "needsPipelineRefresh": boolean;
  /**
   * POST to this endpoint after finishing your edits. The full_refresh query parameter selects the required run type. Across multiple edits any full_refresh=true requirement takes priority.
   */
  "refreshEndpoint"?: string;
  /**
   * Warnings returned after the experiment update.
   */
  "warnings"?: Array<ExperimentsPatchExperimentV2MetaDTOWarningsItems>;

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
    needsPipelineRefresh: {
      baseName: "needs_pipeline_refresh",
      type: "boolean",
      required: true,
    },
    refreshEndpoint: {
      baseName: "refresh_endpoint",
      type: "string",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<ExperimentsPatchExperimentV2MetaDTOWarningsItems>",
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
    return ExperimentsPatchExperimentV2MetaDTO.attributeTypeMap;
  }

  public constructor() {}
}
