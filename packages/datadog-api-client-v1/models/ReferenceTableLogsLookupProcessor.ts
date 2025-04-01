/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsLookupProcessorType } from "./LogsLookupProcessorType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * **Note**: Reference Tables are in public beta.
 * Use the Lookup Processor to define a mapping between a log attribute
 * and a human readable value saved in a Reference Table.
 * For example, you can use the Lookup Processor to map an internal service ID
 * into a human readable service name. Alternatively, you could also use it to check
 * if the MAC address that just attempted to connect to the production
 * environment belongs to your list of stolen machines.
*/
export class ReferenceTableLogsLookupProcessor {
  /**
   * Whether or not the processor is enabled.
  */
  "isEnabled"?: boolean;
  /**
   * Name of the Reference Table for the source attribute and their associated target attribute values.
  */
  "lookupEnrichmentTable": string;
  /**
   * Name of the processor.
  */
  "name"?: string;
  /**
   * Source attribute used to perform the lookup.
  */
  "source": string;
  /**
   * Name of the attribute that contains the corresponding value in the mapping list.
  */
  "target": string;
  /**
   * Type of logs lookup processor.
  */
  "type": LogsLookupProcessorType;

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
    "isEnabled": {
      "baseName": "is_enabled",
      "type": "boolean",
    },
    "lookupEnrichmentTable": {
      "baseName": "lookup_enrichment_table",
      "type": "string",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "source": {
      "baseName": "source",
      "type": "string",
      "required": true,
    },
    "target": {
      "baseName": "target",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "LogsLookupProcessorType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ReferenceTableLogsLookupProcessor.attributeTypeMap;

  }

  public constructor() {











  }
}









