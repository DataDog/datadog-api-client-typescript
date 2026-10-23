/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateExperimentProtocolRequestData } from "./ExperimentsCreateExperimentProtocolRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create a draft protocol with the organization default subject type.
 */
export class ExperimentsCreateExperimentProtocolRequest {
  /**
   * JSON:API protocol request resource.
   */
  "data": ExperimentsCreateExperimentProtocolRequestData;

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
    data: {
      baseName: "data",
      type: "ExperimentsCreateExperimentProtocolRequestData",
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
    return ExperimentsCreateExperimentProtocolRequest.attributeTypeMap;
  }

  public constructor() {}
}
