/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpsgenieServiceCreateData } from "./OpsgenieServiceCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create request for an Opsgenie service.
 */
export class OpsgenieServiceCreateRequest {
  /**
   * Opsgenie service data for a create request.
   */
  "data": OpsgenieServiceCreateData;

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
      type: "OpsgenieServiceCreateData",
      required: true,
    },
  };
}
