/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MuteFindingRequestData } from "./MuteFindingRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new mute finding request.
 */
export class MuteFindingRequest {
  /**
   * Data object containing the new mute properties of the finding.
   */
  "data": MuteFindingRequestData;

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
      type: "MuteFindingRequestData",
      required: true,
    },
  };
}
