/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsPatchExperimentProtocolRequestDataAttributes } from "./ExperimentsPatchExperimentProtocolRequestDataAttributes";
import { ExperimentsPublicProtocolResponseDataType } from "./ExperimentsPublicProtocolResponseDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API protocol request resource.
 */
export class ExperimentsPatchExperimentProtocolRequestData {
  /**
   * Partial protocol update. Omitted attributes remain unchanged. Published protocols accept only name, description, and migration_metadata; archived protocols reject updates.
   */
  "attributes"?: ExperimentsPatchExperimentProtocolRequestDataAttributes;
  /**
   * Protocol ID. If supplied, must match the path protocol_id.
   */
  "id"?: string;
  /**
   * Protocols resource type.
   */
  "type": ExperimentsPublicProtocolResponseDataType;

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
      type: "ExperimentsPatchExperimentProtocolRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsPublicProtocolResponseDataType",
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
    return ExperimentsPatchExperimentProtocolRequestData.attributeTypeMap;
  }

  public constructor() {}
}
